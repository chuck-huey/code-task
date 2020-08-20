import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

export function TestDropdown() {
  const [background, setBackground] = React.useState('#4dbd98');

  const handleChange = (value: any) => {
    setBackground(colorMap[value]);
  };

  return (
    <StyledSelect
      base={background}
      defaultValue="passed"
      style={{ width: 120 }}
      onChange={handleChange}
    >
      <Select.Option value="passed">Passed</Select.Option>
      <Select.Option value="failed">Failed</Select.Option>
      <Select.Option value="retest">Retest</Select.Option>
      <Select.Option value="untest">Untest</Select.Option>
    </StyledSelect>
  );
}

const StyledSelect = styled(Select)<{ base: string }>`
  div.ant-select-selector {
    background: ${(props) => props.base} !important;
    color: #fff;
    border: 2px solid rgba(26, 12, 47, 0.1) !important;
    border-radius: 5px !important;
  }

  span.ant-select-arrow {
    color: #fff;
  }
`;

interface ColorProps {
  [index: string]: any;
}

const colorMap: ColorProps = {
  passed: '#4dbd98',
  failed: '#EB0E43',
  retest: '#F15832',
  untest: '#eee',
};
