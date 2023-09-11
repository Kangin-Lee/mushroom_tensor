import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import './App.css';
import { Container } from 'react-bootstrap';
import List from './component/List';

function App() {
  const [model, setModel] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function loadModel() {
      try {
        // 모델 구조만 로드 (가중치는 모델 내부에 지정된 경로에서 로드)
        const model = await tf.loadLayersModel('/model.json');
        setModel(model);
      } catch (error) {
        console.error('모델 로딩 오류:', error);
      }
    }

    loadModel();
  }, []);

  // 모델로부터 예측 수행하는 함수
  async function classifyMushroom(inputData) {
    if (model) {
      const inputTensor = tf.tensor2d([inputData]); // 입력 데이터를 2D 텐서로 변환
      const predictions = model.predict(inputTensor); // 모델로부터 예측 얻기
      const resultArray = await predictions.data(); // 결과를 JavaScript 배열로 변환
      inputTensor.dispose(); // 메모리 정리

      // 예측 결과에 따라 독버섯 또는 식용버섯 여부를 결정
      const resultText = resultArray[0] > 0.5 ? '독버섯' : '식용버섯';
      const probability = (resultArray[0] * 100).toFixed(2); // 확률 계산

      // 예측 결과와 확률을 반환
      return { resultText, probability };
    }
    return null;
  }

  // 예측 버튼을 클릭할 때 호출될 함수
  async function handlePredict() {
    if (model) {
      // 버튼을 클릭할 때마다 새로운 입력 데이터를 생성하거나 사용자 입력을 받습니다.
      //const inputData = [5, 2, 4, 1, 6, 1, 0, 1, 4, 0, 3, 2, 2, 7, 7, 0, 2, 1, 4, 2, 3, 5]; // 22개의 피처 값
      const inputData = [5, 2, 9, 1, 0, 1, 0, 0, 4, 0, 2, 2, 2, 7, 7, 0, 2, 1, 4, 3, 2, 1]; // 22개의 피처 값
      // 모델로부터 예측 수행
      const { resultText, probability } = await classifyMushroom(inputData);

      // 예측 결과와 확률을 표시
      if (resultText == '독버섯') {
        setResult(`예측 결과: ${resultText}, 확률: ${probability}%`);
      } else {
        setResult(`예측 결과: ${resultText}, 확률: ${(1 - probability) * 100}%`);
      }

    }
  }

  return (
    <div>
      <Container>
        <List />
        {/* 버섯 분류를 위한 UI */}
        <div className='result-area'>
          <button onClick={handlePredict} className='resultBtn'>
            결과 보기
          </button>
          {result !== null && (
            <p>{result}</p>
          )}
        </div>

      </Container>
    </div>
  );
}

export default App;