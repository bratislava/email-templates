import { Column, Img, Row } from '@react-email/components'

import { HeaderLogos } from '../utils/constants'
import { HeaderLogo } from '../utils/enums'

const logoImg = {
  padding: '20px 0',
  display: 'inline-block',
  verticalAlign: 'middle',
}

const border = {
  borderBottom: 'solid 2px',
  borderColor: '#D6D6D6',
  paddingTop: '24px',
  margin: 0,
}

interface HeaderProps {
  logos?: HeaderLogo[];
}

const Header = ({ logos = HeaderLogos.city }: HeaderProps) => {
  return (
    <Row style={{ ...border, paddingTop: '0' }}>
      <Column>
        {/* Outlook doesn't support margin, so we use table to center the image */}
        <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
          <tr>
            <td align="center">
              {logos.map((variant, index) => (
                <Img
                  key={variant.address}
                  height={40}
                  src={variant.address}
                  alt={variant.altName}
                  style={{
                    ...logoImg,
                    marginLeft: index > 0 ? '20px' : '0',
                  }}
                />
              ))}
            </td>
          </tr>
        </table>
      </Column>
    </Row>
  )
}

export default Header
