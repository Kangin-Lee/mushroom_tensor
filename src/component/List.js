import React, { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";

const DropdownSelector = ({ options, defaultText, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="list-area">
      <Dropdown>
        <Dropdown.Toggle variant="success">{defaultText}</Dropdown.Toggle>
        <Dropdown.Menu>
          {options.map((item) => (
            <Dropdown.Item key={item} onClick={() => handleSelect(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <span className="choiceSelect">선택: {selectedOption}</span>
    </div>
  );
};

const List = () => {
  const capShapeOptions = [
    "종모양",
    "원뿔 모양",
    "볼록한 모양",
    "평평한 모양",
    "노비 모양",
    "패인 모양",
  ];
  const capSurfaceOptions = [
    "섬유질 표면",
    "홈이 파인 표면",
    "비늘 표면",
    "매끄러운 표면",
  ];
  const capColorOptions = [
    "갈색",
    "황갈색",
    "계피색",
    "회색",
    "녹색",
    "분홍색",
    "보라색",
    "빨간색",
    "흰색",
    "노란색",
  ];

  const bruises = ["상처 있음", "상처 없음"];

  const odor = [
    "아몬드 냄새",
    "아니스 냄새",
    "크레오소트(역청) 냄새",
    "물고기 냄새",
    "불쾌한 냄새",
    "곰팡이 냄새",
    "냄새 없음",
    "자극적인 냄새",
    "스파이시한 냄새",
  ];

  const gillAttach=['붙어 있음','아래로 내려감','자유로움','홈이 파임']
  const gillSpacing=['가까움','혼잡함','멀음']
  const gillSize = ['넓음','좁음']
  const gillColor=['검정색','갈색','황갈색','초콜릿색','회색','녹색','주황색','분홍색','보라색','빨간색','흰색','노란색']
  const stalkShape=['아래로 갈수록 커짐','아래로 갈수록 가늘어짐']

  const [selectedCapShape, setSelectedCapShape] = useState(null);
  const [selectedCapSurface, setSelectedCapSurface] = useState(null);
  const [selectedCapColor, setSelectedCapColor] = useState(null);
  const [selectedBruises, setSelectedBruises] = useState(null);
  const [selectedOdor, setSelectedOdor] = useState(null);
  const [selectedGillAttach, setSelectedGillAttach] = useState(null);
  const [selectedGillSpacing, setSelectedGillSpacing] = useState(null);
  const [selectedGillSize, setSelectedGillSize] = useState(null);
  const [selectedGillColor, setSelectedGillColor] = useState(null);
  const [selectedStalkShape, setSelectedStalkShape] = useState(null);

  const handleCapShapeSelect = (item) => {
    setSelectedCapShape(item);
  };

  const handleCapSurfaceSelect = (item) => {
    setSelectedCapSurface(item);
  };

  const handleCapColorSelect = (item) => {
    setSelectedCapColor(item);
  };
  const handleBruisesSelect = (item) => {
    setSelectedBruises(item);
  };
  const handleOdorSelect = (item) => {
    setSelectedOdor(item);
  };
  const handleGillAttachSelect = (item) => {
    setSelectedGillAttach(item);
  };
  const handleGillSpacingSelect = (item) => {
    setSelectedGillSpacing(item);
  };
  const handleGillSizeSelect = (item) => {
    setSelectedGillSize(item);
  };
  const handleGillColorSelect = (item) => {
    setSelectedGillColor(item);
  };
  const handleStalkShapeSelect = (item) => {
    setSelectedStalkShape(item);
  };


  return (
    <>
      <div className="select-section">
        <DropdownSelector
          options={capShapeOptions}
          defaultText="모자 모양"
          onSelect={handleCapShapeSelect}
        />

        <DropdownSelector
          options={capSurfaceOptions}
          defaultText="모자 표면"
          onSelect={handleCapSurfaceSelect}
        />
      </div>
      <div className="select-section">
        <DropdownSelector
          options={capColorOptions}
          defaultText="모자 색상"
          onSelect={handleCapColorSelect}
        />

        <DropdownSelector
          options={bruises}
          defaultText="상처 유무"
          onSelect={handleBruisesSelect}
        />
      </div>
      <div className="select-section">
        <DropdownSelector
          options={odor}
          defaultText="냄새"
          onSelect={handleOdorSelect}
        />

        <DropdownSelector
          options={gillAttach}
          defaultText="혓(gill) 붙임 여부"
          onSelect={handleGillAttachSelect}
        />
      </div>
      <div className="select-section">
        <DropdownSelector
          options={gillSpacing}
          defaultText="혓(gill) 간격"
          onSelect={handleGillSpacingSelect}
        />

        <DropdownSelector
          options={gillSize}
          defaultText="혓(gill) 크기"
          onSelect={handleGillSizeSelect}
        />
      </div>

      <div className="select-section">
        <DropdownSelector
          options={gillColor}
          defaultText="혓(gill) 색상"
          onSelect={handleGillColorSelect}
        />

        <DropdownSelector
          options={stalkShape}
          defaultText="줄기 모양"
          onSelect={handleStalkShapeSelect}
        />
      </div>
    </>
  );
};

export default List;
