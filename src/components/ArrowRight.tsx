interface IProps {
  width?: string;
  height?: string;
  color?: string;
}
const ArrowRight = ({
  width = "14.67px",
  height = "11px",
  color = "white",
}: IProps) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        fontSize={"22px"}
        viewBox="0 0 16 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.666504 6.41666L11.8223 6.41667L8.54067 9.7075L9.83317 11L15.3332 5.5L9.83317 0L8.54067 1.2925L11.8223 4.58333L0.666504 4.58333L0.666504 6.41666Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default ArrowRight;
