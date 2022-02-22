import React, { CSSProperties } from 'react';

export const TokenCircle = (props: { iconSize?: number , iconFile?: string, style?:CSSProperties}) => {
  const { iconSize = 24 ,iconFile=undefined, style={}} = props;
  const filePath = iconFile? iconFile:"/unknown_token.png"
  return (
    <span
      style={{
        background: '#000000',
        borderRadius: '0%',
        height: iconSize,
        width: iconSize,
        display: 'inline-flex',
        overflow: 'hidden',
        ...style
      }}
    >
      <img src={filePath}/>
    </span>
  );
};
