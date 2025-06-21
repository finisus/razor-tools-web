"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type IsoIconProps = {
  width?: string | number;
  height?: string | number;
  fillLight?: string;
  fillDark?: string;
  strokeLight?: string;
  strokeDark?: string;
  strokeWidth?: string | number;
};

export const MoneyIcon = ({
  width = "20",
  height = "20",
  strokeWidth = "1px",
  fillDark = "#26262680",
  strokeDark = "#E0E0E040",
  fillLight = "#E0E0E080",
  strokeLight = "#26262640",
  ...rest
}: IsoIconProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentFill = resolvedTheme === "dark" ? fillDark : fillLight;
  const currentStroke = resolvedTheme === "dark" ? strokeDark : strokeLight;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 119"
      fill={currentFill}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path
        d="M47.4106 94.22C47.4106 98.73 46.6105 102.04 45.0005 104.13C44.4305 104.86 43.7705 105.45 43.0005 105.89L42.3606 106.21C38.9906 107.67 34.8206 107.38 29.8506 105.34V116.93L20.2305 111.37V99.5C15.9805 95.95 12.3105 91.71 9.22046 86.8C6.13046 81.89 3.87066 76.17 2.43066 69.63L11.3306 70.63C12.5306 75.74 14.3107 80.13 16.6807 83.79C19.0407 87.46 22.1505 90.4 26.0005 92.62C29.2905 94.52 32.0706 95.28 34.3606 94.9C36.6506 94.51 37.7905 92.53 37.7905 88.94C37.7905 88.37 37.7607 87.8 37.7107 87.24C37.4507 84.64 36.6006 82.14 35.1406 79.75C33.5906 77.19 30.2105 73.38 25.0205 68.31C24.3405 67.65 23.6206 66.96 22.8706 66.25C22.5406 65.94 22.2206 65.64 21.9106 65.34C20.6106 64.1 19.4005 62.89 18.2705 61.71C13.8305 57.08 10.6307 52.9 8.68066 49.15C6.11066 44.22 4.83057 39.27 4.83057 34.3C4.83057 28.32 6.51062 24.65 9.88062 23.28C13.2506 21.91 16.7005 22.02 20.2305 23.59V12L25.9006 15.27L26.8005 15.79L29.8506 17.55V29.15C31.7906 30.63 33.5707 32.23 35.1907 33.97C36.9007 35.81 38.4305 37.79 39.7705 39.92C40.4905 41.06 41.1605 42.21 41.7605 43.37C43.3805 46.43 44.6105 49.57 45.4905 52.81L38.8105 52.26L36.5906 52.08C36.2506 50.86 35.8707 49.71 35.4307 48.61C34.6207 46.56 33.6505 44.72 32.5005 43.1C31.4305 41.6 30.1306 40.23 28.6006 38.99C27.6006 38.17 26.4905 37.42 25.2805 36.72C21.7505 34.69 19.0605 34.03 17.2205 34.76C15.3805 35.49 14.4507 37.19 14.4507 39.86C14.4507 42.89 15.6605 45.98 18.0605 49.12C20.2405 51.96 23.8707 55.71 28.9307 60.36C29.2707 60.68 29.6205 61 29.9705 61.31C30.1705 61.5 30.3706 61.68 30.5706 61.86C31.0606 62.31 31.5505 62.76 32.0205 63.22C36.8405 67.86 40.5406 72.74 43.1406 77.88C43.8306 79.26 44.4505 80.63 44.9705 81.99C46.6005 86.18 47.4106 90.25 47.4106 94.22Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M49.8506 7.55L29.8506 17.55L26.8005 15.79L25.9006 15.27L20.2305 12L40.2305 2L49.8506 7.55Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M49.8516 7.55005V19.15L39.1716 24.49L35.2117 26.47L29.8516 29.15V17.55L49.8516 7.55005Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M67.4111 84.2201C67.4111 90.7501 65.7311 94.7501 62.3611 96.2101L49.8511 102.47L45.7112 104.54L43.001 105.89C43.771 105.45 44.431 104.86 45.001 104.13C46.611 102.04 47.4111 98.7301 47.4111 94.2201C47.4111 90.2501 46.6009 86.1801 44.9709 81.9901C44.4509 80.6301 43.8311 79.2601 43.1411 77.8801C40.5411 72.7401 36.841 67.8601 32.021 63.2201C31.551 62.7601 31.061 62.3101 30.571 61.8601C30.371 61.6801 30.1709 61.5001 29.9709 61.3101C29.6209 61.0001 29.2712 60.6801 28.9312 60.3601C23.8712 55.7101 20.241 51.9601 18.061 49.1201C15.661 45.9801 14.4512 42.8901 14.4512 39.8601C14.4512 37.1901 15.3809 35.4901 17.2209 34.7601C19.0609 34.0301 21.751 34.6901 25.281 36.7201C26.491 37.4201 27.6011 38.1701 28.6011 38.9901C30.1311 40.2301 31.431 41.6001 32.501 43.1001C33.651 44.7201 34.6212 46.5601 35.4312 48.6101C35.8712 49.7101 36.2511 50.8601 36.5911 52.0801L38.811 52.2601L45.491 52.8101L49.4412 50.8301C49.8112 51.1701 50.181 51.5101 50.571 51.8601C56.101 56.9001 60.2911 62.2401 63.1411 67.8801C65.9911 73.5301 67.4111 78.9701 67.4111 84.2201Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M49.8516 102.47V106.93L29.8516 116.93V105.34C34.8216 107.38 38.9916 107.67 42.3616 106.21L43.0015 105.89L45.7117 104.54L49.8516 102.47Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M65.4905 42.8099L49.4407 50.8299L45.4905 52.8099C44.6105 49.5699 43.3805 46.4299 41.7605 43.3699C41.1605 42.2099 40.4905 41.0599 39.7705 39.9199C38.4305 37.7899 36.9007 35.8099 35.1907 33.9699C33.5707 32.2299 31.7906 30.6299 29.8506 29.1499L35.2107 26.4699L39.1707 24.4899L49.8506 19.1499C53.8606 22.1999 57.1705 25.7899 59.7705 29.9199C62.3805 34.0399 64.2805 38.3399 65.4905 42.8099Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M20.2307 18.1101L9.88086 23.2801"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M37.79 88.9401C37.79 92.5301 36.6501 94.5101 34.3601 94.9001C32.0701 95.2801 29.29 94.5201 26 92.6201C22.15 90.4001 19.0402 87.4601 16.6802 83.7901C14.3102 80.1301 12.5301 75.7401 11.3301 70.6301L21.9102 65.3401C22.2202 65.6401 22.5401 65.9401 22.8701 66.2501C23.6201 66.9601 24.34 67.6501 25.02 68.3101C30.21 73.3801 33.5901 77.1901 35.1401 79.7501C36.6001 82.1401 37.4502 84.6401 37.7102 87.2401C37.7602 87.8001 37.79 88.3701 37.79 88.9401Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M21.9106 65.34L11.3306 70.63L2.43066 69.63L18.2705 61.71C19.4005 62.89 20.6106 64.1 21.9106 65.34Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ExclamationIcon = ({
  width = "20",
  height = "20",
  strokeWidth = "1px",
  fillDark = "#26262680",
  strokeDark = "#E0E0E040",
  fillLight = "#E0E0E080",
  strokeLight = "#26262640",
  ...rest
}: IsoIconProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentFill = resolvedTheme === "dark" ? fillDark : fillLight;
  const currentStroke = resolvedTheme === "dark" ? strokeDark : strokeLight;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 122"
      fill={currentFill}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path
        d="M2.74023 12.6899V76.5799L15.1202 83.72V19.8299L2.74023 12.6899ZM2.74023 97.8699V112.07L15.1202 119.21V105.01L2.74023 97.8699Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M35.1202 9.82994L15.1202 19.8299L2.74023 12.6899L22.7402 2.68994L35.1202 9.82994Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M35.1201 9.82983V73.7198L15.1201 83.7198V19.8298L35.1201 9.82983Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M35.1202 95.0099L15.1202 105.01L2.74023 97.8699L22.7402 87.8699L35.1202 95.0099Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M35.1201 95.01V109.21L15.1201 119.21V105.01L35.1201 95.01Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PersonIcon = ({
  width = "20",
  height = "20",
  strokeWidth = "1px",
  fillDark = "#262626",
  strokeDark = "#E0E0E0",
  fillLight = "#E0E0E0",
  strokeLight = "#262626",
  ...rest
}: IsoIconProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentFill = resolvedTheme === "dark" ? fillDark : fillLight;
  const currentStroke = resolvedTheme === "dark" ? strokeDark : strokeLight;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 92 114"
      fill={currentFill}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path
        d="M69.61 97.8V111.33L2.22998 72.42V58.89C2.22998 56.15 2.83998 53.99 4.06998 52.4C4.67998 51.61 5.39998 51.01 6.20998 50.6H6.21998C7.02998 50.2 7.93998 49.99 8.95998 49.97C13.32 49.99 17.74 50.67 22.23 52.01C26.72 53.36 31.29 55.37 35.92 58.04C40.55 60.72 45.12 63.98 49.61 67.82C54.1 71.66 58.52 76.09 62.88 81.1C64.77 83.31 66.31 85.8 67.5 88.56C67.6 88.76 67.68 88.97 67.77 89.18C69 92.19 69.61 95.06 69.61 97.8Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M52.77 43.61C52.77 44.54 52.72 45.42 52.62 46.24C52.14 50.13 50.54 52.85 47.82 54.4C44.52 56.28 40.55 55.89 35.92 53.21C31.59 50.71 27.83 46.88 24.67 41.73C24.61 41.65 24.56 41.57 24.51 41.49C24.34 41.21 24.18 40.94 24.02 40.66C20.72 34.97 19.07 29.47 19.07 24.15C19.07 18.83 20.72 15.24 24.02 13.36L24.8 12.97C27.94 11.55 31.65 12.08 35.92 14.55C37.06 15.2 38.15 15.95 39.21 16.79C42.46 19.36 45.33 22.8 47.82 27.09C50.58 31.85 52.18 36.47 52.63 40.97C52.73 41.85 52.77 42.73 52.77 43.61Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M72.77 33.61C72.77 38.92 71.12 42.52 67.82 44.4L67.04 44.79L58.02 49.3L47.82 54.4C50.54 52.85 52.14 50.13 52.62 46.24C52.72 45.42 52.77 44.54 52.77 43.61C52.77 42.73 52.73 41.85 52.63 40.97C52.18 36.47 50.58 31.85 47.82 27.09C45.33 22.8 42.46 19.36 39.21 16.79C38.15 15.95 37.06 15.2 35.92 14.55C31.65 12.08 27.94 11.55 24.8 12.97L44.02 3.36C47.32 1.47 51.29 1.87 55.92 4.55C60.55 7.22 64.52 11.4 67.82 17.09C71.12 22.79 72.77 28.29 72.77 33.61Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M89.61 87.8V101.33L69.61 111.33V97.8C69.61 95.06 69 92.19 67.77 89.18C67.68 88.97 67.6 88.76 67.5 88.56C66.31 85.8 64.77 83.31 62.88 81.1C58.52 76.09 54.1 71.66 49.61 67.82C45.12 63.98 40.55 60.72 35.92 58.04C31.29 55.37 26.72 53.36 22.23 52.01C17.74 50.67 13.32 49.99 8.95998 49.97C7.93998 49.99 7.02998 50.2 6.21998 50.6L24.51 41.49C24.56 41.57 24.61 41.65 24.67 41.73C27.83 46.88 31.59 50.71 35.92 53.21C40.55 55.89 44.52 56.28 47.82 54.4L58.02 49.3C61.94 51.72 65.8 54.56 69.61 57.82C74.1 61.66 78.52 66.09 82.88 71.1C84.91 73.48 86.54 76.18 87.77 79.18C89 82.19 89.61 85.06 89.61 87.8Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LocationHomeIcon = ({
  width = "20",
  height = "20",
  strokeWidth = "1px",
  fillDark = "#262626",
  strokeDark = "#E0E0E0",
  fillLight = "#E0E0E0",
  strokeLight = "#262626",
  ...rest
}: IsoIconProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentFill = resolvedTheme === "dark" ? fillDark : fillLight;
  const currentStroke = resolvedTheme === "dark" ? strokeDark : strokeLight;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 88 115"
      fill={currentFill}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path
        d="M64.06 56.3751L45.15 29.1851L33.69 12.7151L22 16.0251L2 21.6951V76.2451L65.39 112.845V58.2851L64.06 56.3751ZM22 44.3351C22.4 41.8651 23.49 40.1151 25.27 39.1051C27.58 37.7851 30.39 38.0851 33.69 39.9851C36.99 41.8951 39.8 44.8451 42.11 48.8251C43.93 51.9651 45.03 55.0451 45.42 58.0551C45.53 58.8751 45.58 59.6851 45.58 60.4951C45.58 64.2751 44.42 66.8351 42.11 68.1451C41.92 68.2551 41.73 68.3451 41.53 68.4251C39.34 69.4051 36.72 69.0151 33.69 67.2651C31.67 66.1051 29.83 64.5451 28.18 62.5951C27.14 61.3651 26.17 59.9651 25.27 58.4251C23.49 55.3651 22.4 52.3551 22 49.4051C21.87 48.5151 21.81 47.6351 21.81 46.7651C21.81 45.8951 21.87 45.0751 22 44.3351ZM57.46 99.1751L9.92 71.7251V70.4751C9.92 69.4151 10.12 68.5451 10.52 67.8651C10.91 67.1851 11.51 66.8051 12.3 66.7351C14.72 66.3751 17.24 66.3851 19.86 66.7551C20.75 66.8751 21.64 67.0451 22.55 67.2551C23.3 67.4251 24.05 67.6251 24.81 67.8651C27.7 68.7451 30.66 70.0651 33.69 71.8151C36.72 73.5651 39.67 75.6551 42.55 78.1051C43.32 78.7551 44.08 79.4251 44.83 80.1251C48.43 83.4451 51.85 87.2251 55.09 91.4351C55.88 92.4251 56.47 93.4851 56.87 94.6251C57.26 95.7651 57.46 96.8651 57.46 97.9251V99.1751Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M19.8599 66.7551L9.91992 71.7251V70.4751C9.91992 69.4151 10.1199 68.5451 10.5199 67.8651C10.9099 67.1851 11.5099 66.8051 12.2999 66.7351C14.7199 66.3751 17.2399 66.3851 19.8599 66.7551Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M57.4599 97.9251V99.1751L9.91992 71.7251L19.8599 66.7551C20.7499 66.8751 21.6399 67.0451 22.5499 67.2551C23.2999 67.4251 24.0499 67.6251 24.8099 67.8651C27.6999 68.7451 30.6599 70.0651 33.6899 71.8151C36.7199 73.5651 39.6699 75.6551 42.5499 78.1051C43.3199 78.7551 44.0799 79.4251 44.8299 80.1251C48.4299 83.4451 51.8499 87.2251 55.0899 91.4351C55.8799 92.4251 56.4699 93.4851 56.8699 94.6251C57.2599 95.7651 57.4599 96.8651 57.4599 97.9251Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M85.3896 48.2851V102.845L65.3896 112.845V58.2851L85.3896 48.2851Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M53.69 2.71509L33.69 12.7151L22 16.0251L2 21.6951L22 11.6951L53.69 2.71509Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M85.3904 48.2851L65.3904 58.2851L64.0604 56.3751L45.1504 29.1851L33.6904 12.7151L53.6904 2.71509L85.3904 48.2851Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M45.5796 60.4951C45.5796 64.2751 44.4196 66.8351 42.1096 68.1451C41.9196 68.2551 41.7296 68.3451 41.5296 68.4251C39.3396 69.4051 36.7196 69.0151 33.6896 67.2651C31.6696 66.1051 29.8296 64.5451 28.1796 62.5951C27.1396 61.3651 26.1696 59.9651 25.2696 58.4251C23.4896 55.3651 22.3996 52.3551 21.9996 49.4051C21.8696 48.5151 21.8096 47.6351 21.8096 46.7651C21.8096 45.8951 21.8696 45.0751 21.9996 44.3351C22.3996 41.8651 23.4896 40.1151 25.2696 39.1051C27.5796 37.7851 30.3896 38.0851 33.6896 39.9851C36.9896 41.8951 39.7996 44.8451 42.1096 48.8251C43.9296 51.9651 45.0296 55.0451 45.4196 58.0551C45.5296 58.8751 45.5796 59.6851 45.5796 60.4951Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const KeyboardDoubleArrowUpIcon = ({
  width = "20",
  height = "20",
  strokeWidth = "1px",
  fillDark = "#262626",
  strokeDark = "#E0E0E0",
  fillLight = "#E0E0E0",
  strokeLight = "#262626",
  ...rest
}: IsoIconProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentFill = resolvedTheme === "dark" ? fillDark : fillLight;
  const currentStroke = resolvedTheme === "dark" ? strokeDark : strokeLight;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 90 113"
      fill={currentFill}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path
        d="M67.6402 105.93L60.0102 110.28L35.5002 68.16L34.9402 67.2L29.3102 70.37L9.87023 81.34L2.24023 68.17L34.9402 49.53L35.5502 50.58L43.2202 63.81L67.6402 105.93Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M35.5001 68.16L29.8701 71.34L9.87012 81.34L29.3101 70.37L34.9401 67.2L35.5001 68.16Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M87.6403 95.9301L80.0103 100.28L60.0103 110.28L67.6403 105.93L79.7703 99.8701L87.6403 95.9301Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M87.6403 58.41L80.0103 62.76L71.0203 67.26L63.1003 71.22L60.0103 72.76L63.0003 71.05L67.6403 68.41L70.7803 66.84L79.7703 62.35L87.6403 58.41Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M35.5001 30.6401L29.8701 33.8101L9.87012 43.8101L29.3101 32.8501L34.9401 29.6801L35.5001 30.6401Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M67.6402 68.41L63.0002 71.05L60.0102 72.76L51.9402 58.89L44.2302 45.64L43.8902 45.06L35.5002 30.64L34.9402 29.68L29.3102 32.85L9.87023 43.81L2.24023 30.65L34.9402 12.01L35.5502 13.06L43.2202 26.29L51.8002 41.1L51.9002 41.26L67.6402 68.41Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M87.6404 58.41L79.7704 62.35L70.7804 66.84L67.6404 68.41L51.9004 41.26L51.8004 41.1L43.2204 26.29L35.5504 13.06L34.9404 12.01L54.9404 2.01001L87.6404 58.41Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M87.6404 95.9301L79.7704 99.8701L67.6404 105.93L43.2204 63.8101L35.5504 50.5801L34.9404 49.5301L43.8904 45.0601L44.2304 45.6401L51.9404 58.8901L60.0104 72.7601L63.1004 71.2201L71.0204 67.2601L87.6404 95.9301Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NearMeIcon = ({
  width = "20",
  height = "20",
  strokeWidth = "1px",
  fillDark = "#262626",
  strokeDark = "#E0E0E0",
  fillLight = "#E0E0E0",
  strokeLight = "#262626",
  ...rest
}: IsoIconProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentFill = resolvedTheme === "dark" ? fillDark : fillLight;
  const currentStroke = resolvedTheme === "dark" ? strokeDark : strokeLight;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 101 97"
      fill={currentFill}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path
        d="M78.0793 23.9725L60.1792 68.8125L49.7793 94.8525L43.8694 91.4425L31.8394 50.3325L2.06934 19.3325V12.5525L29.0593 16.6025L78.0793 23.9725Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M98.0793 13.9724L69.7793 84.8524L49.7793 94.8524L60.1792 68.8124L78.0793 23.9724L98.0793 13.9724Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
      <path
        d="M98.0793 13.9725L78.0793 23.9725L29.0593 16.6025L2.06934 12.5525L22.0693 2.55249L98.0793 13.9725Z"
        stroke={currentStroke}
        strokeLinejoin="round"
      />
    </svg>
  );
};
