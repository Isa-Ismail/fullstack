import { Card, CardContent, CardMedia, Container, Grid } from "@mui/material"
import Link from "next/link"

const CardComponent = ({name, img, id}) => {
  return (
    <div>
        <Card className='hover:text-base' style = {{backgroundColor: '#63b3d849', cursor: 'pointer', boxShadow: '0 2px 10px white'}}>
          <Link href = {`/coffee-store/${id}`}>
            <div>
            <CardContent>
              <p>{name}</p>
            </CardContent>
            <CardMedia component='img' image={img} style = {{ height: '17rem', width: '25rem'}} />
            </div>
          </Link>
        </Card>
    </div>
  )
}

export default CardComponent