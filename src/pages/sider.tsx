import '../styles/sider.css'

type SideTextProps = {
  children?: number[] | string[]
}

function SiderText({ children }: SideTextProps) {
  return (
    <>
      <div className="sider-btn-group">
        {children?.map((item, index) => {
          return (
            <div className="sider-btn">
              <div key={index} className="sider-btn-text">
                {item}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default function Sider() {
  return (
    <>
      <div>
        <SiderText children={['中', '国', '古', '寺', '院']} />
      </div>
    </>
  )
}
