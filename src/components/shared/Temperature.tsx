import React from 'react';
import NumberFormat from 'react-number-format';

type Props = {
  temp: number | undefined;
};

function Temperature({ temp }: Props) {
  return (
    <NumberFormat
      value={temp}
      displayType={'text'}
      decimalScale={0}
      suffix={'°'}
    />
  );
}

export default Temperature;
