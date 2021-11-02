import type { IconProps } from './types'

const IconCloseCircle = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M12 0C5.364 0 0 5.364 0 12s5.364 12 12 12 12-5.364 12-12S18.636 0 12 0Zm6 16.308L16.308 18 12 13.692 7.692 18 6 16.308 10.308 12 6 7.692 7.692 6 12 10.308 16.308 6 18 7.692 13.692 12 18 16.308Z'
        fill={color}
      />
    </svg>
  )
}

export default IconCloseCircle
