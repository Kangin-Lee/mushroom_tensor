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
          {options.map((item,index) => (
            <Dropdown.Item key={index} onClick={() => handleSelect(item)}>
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
  const stalkRoot= ['주름','둥근모양','컵 모양','균등','주름 모양 뿌리뭉치','발된된 뿌리','모름']
  const stalkSurfaceAboveRing = ['섬유질 표면','비늘 표면','실크 표면','매크러운 표면']
  const stalkSurfaceBelowRing=['섬유질 표면','비늘 표면','실크 표면','매크러운 표면']
  const stalkColorAboveRing=['갈색','황갈색','계피색','회색','주황색','분홍색','빨간색','흰색','노란색']
  const stalkColorBelowRing=['갈색','황갈색','계피색','회색','주황색','분홍색','빨간색','흰색','노란색']
  const veilType = ['부분','범용'] 
  const veilColor=['갈색','주황색','흰색','노란색']
  const ringNumber=['없음','하나','둘']
  const ringType=['거미줄 모양','사라짐','확장됨','큼','없음','펜던트 형태','감싸는 형태','지대 모양']
  const sporePrintColor=['검정색','갈색','황색','초콜릿색','녹색','주황색','보라색','흰색','노란색']
  const population=['매우 많음','모여 있음','많음','흩어짐','몇몇','독립적']
  const habitat=['풀밭','나뭇잎','초원','길가','도시','폐기문','숲']



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
  const [selectedStalkRoot, setSelectedStalkRoot] = useState(null);
  const [selectedStalkSurfaceAboveRing, setSelectedStalkSurfaceAboveRing] = useState(null);
  const [selectedStalkSurfaceBelowRing, setSelectedStalkSurfaceBelowRing] = useState(null);
  const [selectedStalkColorAboveRing, setSelectedStalkColorAboveRing] = useState(null);
  const [selectedStalkColorBelowRing, setSelectedStalkColorBelowRing] = useState(null);
  const [selectedVeilType, setSelectedVeilType] = useState(null);
  const [selectedVeilColor, setSelectedVeilColor] = useState(null);
  const [selectedRingNumber, setSelectedRingNumber] = useState(null);
  const [selectedRingType, setSelectedRingType] = useState(null);
  const [selectedSporePrintColor, setSelectedSporePrintColor] = useState(null);
  const [selectedPopulation, setSelectedPopulation] = useState(null);
  const [selectedHabitat, setSelectedHabitat] = useState(null);

  const [selectedCapShapeIndex, setSelectedCapShapeIndex] = useState(null);
  const [selectedCapSurfaceIndex, setSelectedCapSurfaceIndex] = useState(null);
  const [selectedCapColorIndex, setSelectedCapColorIndex] = useState(null);
  const [selectedBruisesIndex, setSelectedBruisesIndex] = useState(null);
  const [selectedOdorIndex, setSelectedOdorIndex] = useState(null);
  const [selectedGillAttachIndex, setSelectedGillAttachIndex] = useState(null);
  const [selectedGillSpacingIndex, setSelectedGillSpacingIndex] = useState(null);
  const [selectedGillSizeIndex, setSelectedGillSizeIndex] = useState(null);
  const [selectedGillColorIndex, setSelectedGillColorIndex] = useState(null);
  const [selectedStalkShapeIndex, setSelectedStalkShapeIndex] = useState(null);
  const [selectedStalkRootIndex, setSelectedStalkRootIndex] = useState(null);
  const [selectedStalkSurfaceAboveRingIndex, setSelectedStalkSurfaceAboveRingIndex] = useState(null);
  const [selectedStalkSurfaceBelowRingIndex, setSelectedStalkSurfaceBelowRingIndex] = useState(null);
  const [selectedStalkColorAboveRingIndex, setSelectedStalkColorAboveRingIndex] = useState(null);
  const [selectedStalkColorBelowRingIndex, setSelectedStalkColorBelowRingIndex] = useState(null);
  const [selectedVeilTypeIndex, setSelectedVeilTypeIndex] = useState(null);
  const [selectedVeilColorIndex, setSelectedVeilColorIndex] = useState(null);
  const [selectedRingNumberIndex, setSelectedRingNumberIndex] = useState(null);
  const [selectedRingTypeIndex, setSelectedRingTypeIndex] = useState(null);
  const [selectedSporePrintColorIndex, setSelectedSporePrintColorIndex] = useState(null);
  const [selectedPopulationIndex, setSelectedPopulationIndex] = useState(null);
  const [selectedHabitatIndex, setSelectedHabitatIndex] = useState(null);

  const handleCapShapeSelect = (item, index) => {
    setSelectedCapShape(item);
    setSelectedCapShapeIndex(index);
  };

  const handleCapSurfaceSelect = (item, index) => {
    setSelectedCapSurface(item);
    setSelectedCapSurfaceIndex(index);
  };

  const handleCapColorSelect = (item, index) => {
    setSelectedCapColor(item);
    setSelectedCapColorIndex(index);
  };

  const handleBruisesSelect = (item, index) => {
    setSelectedBruises(item);
    setSelectedBruisesIndex(index);
  };
  const handleOdorSelect = (item, index) => {
    setSelectedOdor(item);
    setSelectedOdorIndex(index);
  };
  const handleGillAttachSelect = (item, index) => {
    setSelectedGillAttach(item);
    setSelectedGillAttachIndex(index)
  };
  const handleGillSpacingSelect = (item, index) => {
    setSelectedGillSpacing(item);
    setSelectedGillSpacingIndex(index)
  };
  const handleGillSizeSelect =(item, index) => {
    setSelectedGillSize(item);
    setSelectedGillSizeIndex(index)
  };
  const handleGillColorSelect = (item, index) => {
    setSelectedGillColor(item);
    setSelectedGillColorIndex(index)
  };
  const handleStalkShapeSelect = (item, index) => {
    setSelectedStalkShape(item);
    setSelectedStalkShapeIndex(index)
  };
  const handleStalkRootSelect = (item, index) => {
    setSelectedStalkRoot(item);
    setSelectedStalkRootIndex(index)
  };
  const handleStalkSurfaceAboveRingSelect = (item, index) => {
    setSelectedStalkSurfaceAboveRing(item);
    setSelectedStalkSurfaceAboveRingIndex(index)
  };
  const handleStalkSurfaceBelowRingSelect = (item, index) => {
    setSelectedStalkSurfaceBelowRing(item);
    setSelectedStalkSurfaceBelowRingIndex(index)
  };
  const handleStalkColorAboveRingSelect = (item, index) => {
    setSelectedStalkColorAboveRing(item);
    setSelectedStalkColorAboveRingIndex(index)
  };
  const handleStalkColorBelowRingSelect = (item, index) => {
    setSelectedStalkColorBelowRing(item);
    setSelectedStalkColorBelowRingIndex(index)
  };
  const handleVeilTypeSelect = (item, index) => {
    setSelectedVeilType(item);
    setSelectedVeilTypeIndex(index)
  };
  const handleVeilColorSelect = (item, index) => {
    setSelectedVeilColor(item);
    setSelectedVeilColorIndex(index)
  };
  const handleRingNumberSelect = (item, index) => {
    setSelectedRingNumber(item);
    setSelectedRingNumberIndex(index)
  };
  const handleRingTypeSelect = (item, index) => {
    setSelectedRingType(item);
    setSelectedRingTypeIndex(index)
  };
  const handleSporePrintColorSelect = (item, index) => {
    setSelectedSporePrintColor(item);
    setSelectedSporePrintColorIndex(index)
  };
  const handlePopulationSelect = (item, index) => {
    setSelectedPopulation(item);
    setSelectedPopulationIndex(index)
  };
  const handleHabitatSelect = (item, index) => {
    setSelectedHabitat(item);
    setSelectedHabitatIndex(index)
  };


  return (
    <div className="mushroomSelect-area">
      <div className="select-section">
        <DropdownSelector
          options={capShapeOptions}
          defaultText="모자 모양"
          onSelect={(item, index) => handleCapShapeSelect(item, index)}
        />

        <DropdownSelector
          options={capSurfaceOptions}
          defaultText="모자 표면"
          onSelect={(item, index) => handleCapSurfaceSelect(item, index)}
        />

        <DropdownSelector
          options={capColorOptions}
          defaultText="모자 색상"
          onSelect={(item, index) => handleCapColorSelect(item, index)}
        />

        <DropdownSelector
          options={bruises}
          defaultText="상처 유무"
          onSelect={(item, index) => handleBruisesSelect(item, index)}
        />

        <DropdownSelector
          options={odor}
          defaultText="냄새"
          onSelect={(item, index) => handleOdorSelect(item, index)}
        />

        <DropdownSelector
          options={gillAttach}
          defaultText="혓(gill) 붙임 여부"
          onSelect={(item, index) => handleGillAttachSelect(item, index)}
        />
{/* ================================================================================ */}
        <DropdownSelector
          options={gillSpacing}
          defaultText="혓(gill) 간격"
          onSelect={(item, index) => handleGillSpacingSelect(item, index)}
        />

        <DropdownSelector
          options={gillSize}
          defaultText="혓(gill) 크기"
          onSelect={(item, index) => handleGillSizeSelect(item, index)}
        />

        <DropdownSelector
          options={gillColor}
          defaultText="혓(gill) 색상"
          onSelect={(item, index) => handleGillColorSelect(item, index)}
        />

        <DropdownSelector
          options={stalkShape}
          defaultText="줄기 모양"
          onSelect={(item, index) => handleStalkShapeSelect(item, index)}
        />

        <DropdownSelector
          options={stalkRoot}
          defaultText="줄기 뿌리 모양"
          onSelect={(item, index) => handleStalkRootSelect(item, index)}
        />
        </div>
        <div className="select-section">
        <DropdownSelector
          options={stalkSurfaceAboveRing}
          defaultText="줄기 위쪽 표면"
          onSelect={(item, index) => handleStalkSurfaceAboveRingSelect(item, index)}
        />
      
        <DropdownSelector
          options={stalkSurfaceBelowRing}
          defaultText="줄기 아래쪽 표면"
          onSelect={(item, index) => handleStalkSurfaceBelowRingSelect(item, index)}
        />

        <DropdownSelector
          options={stalkColorAboveRing}
          defaultText="줄기 위쪽 색"
          onSelect={(item, index) => handleStalkColorAboveRingSelect(item, index)}
        />

        <DropdownSelector
          options={stalkColorBelowRing}
          defaultText="줄기 아래쪽 색"
          onSelect={(item, index) => handleStalkColorBelowRingSelect(item, index)}
        />

        <DropdownSelector
          options={veilType}
          defaultText="베일 타입"
          onSelect={(item, index) => handleVeilTypeSelect(item, index)}
        />

        <DropdownSelector
          options={veilColor}
          defaultText="배일 색"
          onSelect={(item, index) => handleVeilColorSelect(item, index)}
        />

        <DropdownSelector
          options={ringNumber}
          defaultText="링 개수"
          onSelect={(item, index) => handleRingNumberSelect(item, index)}
        />

        <DropdownSelector
          options={ringType}
          defaultText="링 타입"
          onSelect={(item, index) => handleRingTypeSelect(item, index)}
        />

        <DropdownSelector
          options={sporePrintColor}
          defaultText="포자 무늬 색"
          onSelect={(item, index) => handleSporePrintColorSelect(item, index)}
        />

        <DropdownSelector
          options={population}
          defaultText="밀집도"
          onSelect={(item, index) => handlePopulationSelect(item, index)}
        />

        <DropdownSelector
          options={habitat}
          defaultText="서식지"
          onSelect={(item, index) => handleHabitatSelect(item, index)}
        />
      </div>
    </div>
  );
};

export default List;
