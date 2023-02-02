import { FC } from 'react';
import { IconProps } from './types';

export const Card: FC<IconProps> = ({ height = 17, width = 26, fill = '#000', name = 'Card' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <title>{name}</title>
      <path
        d="M22.9613 0H3.03868C1.3738 0 0 1.31141 0 2.90068V14.0993C0 15.6886 1.3738 17 3.03868 17H22.9613C24.6262 17 26 15.6886 26 14.0993V2.90068C26 1.31141 24.6262 0 22.9613 0ZM22.9613 15.6886H3.03868C2.11386 15.6886 1.3738 14.9822 1.3738 14.0994V7.23889H24.6263V14.0994C24.6263 14.9575 23.8862 15.6886 22.9614 15.6886H22.9613ZM24.6262 4.81689V5.9017H1.37369V4.81689H24.6262ZM3.03863 1.31136H22.9613C23.8861 1.31136 24.6261 2.01781 24.6261 2.90063V3.50558H1.37364V2.90063C1.37364 2.04246 2.11371 1.31136 3.03852 1.31136H3.03863ZM20.5039 8.92854C20.0807 8.92854 19.6586 9.00441 19.2622 9.18078C18.0463 8.65069 16.5929 8.97879 15.722 9.9631C14.8498 10.9977 14.8498 12.4854 15.722 13.5201C16.3031 14.2009 17.1485 14.5547 18.0206 14.5547C18.4438 14.5547 18.866 14.4788 19.2365 14.3024C20.2935 14.7566 21.562 14.5803 22.4343 13.8482C23.3323 13.0659 23.6502 11.8303 23.227 10.7455C22.8564 9.66068 21.72 8.92862 20.5041 8.92862L20.5039 8.92854ZM19.6327 11.7533C19.6327 12.5859 18.9195 13.2667 18.0474 13.2667C17.1752 13.2667 16.462 12.5859 16.462 11.7533C16.462 10.9207 17.1752 10.2399 18.0474 10.2399C18.9185 10.2399 19.6327 10.9217 19.6327 11.7533ZM20.5576 10.2399C21.0065 10.2399 21.4297 10.4419 21.7466 10.7946C22.143 11.2488 22.2224 11.8794 21.9582 12.4085C21.694 12.9386 21.1655 13.2657 20.5576 13.2657C21.1645 12.3336 21.1645 11.1739 20.5576 10.2399H20.5576Z"
        fill={fill}
      />
    </svg>
  );
};