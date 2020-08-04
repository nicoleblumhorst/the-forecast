import React from 'react';
import NumberFormat from 'react-number-format';

type Props = {
  percentage: number | undefined;
};

function Percentage({ percentage }: Props) {
  if (!percentage) {
    return <></>;
  }

  const value = percentage > 1 ? percentage : percentage * 100;
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      decimalScale={0}
      suffix={'%'}
    />
  );
}

export default Percentage;
