import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blueGrey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const data = [
  {
    avatar: '/src/assets/wall.webp',
    title: 'Sumar',
    description: 'Una Cifra',
    url: '/sumar/una-cifra',
    image: '/monito-suma-g.jpeg',
    paragraph: 'Suma numeros de una cifra',
  },
  {
    avatar: '/src/assets/wall.webp',
    title: 'Sumar',
    description: 'Dos Cifras',
    url: '/sumar/dos-cifras',
    image: '/monito-suma-e.jpeg',
    paragraph: 'Suma numeros dos cifras',
  },
  {
    avatar: '/src/assets/wall.webp',
    title: 'Sumar',
    description: 'Tres Cifras',
    url: '/sumar/tres-cifras',
    image: '/monito-suma-f.jpeg',
    paragraph: 'Suma numeros tres cifras',
  },
  {
    avatar: '/src/assets/wall.webp',
    title: 'Restar',
    description: 'Una Cifra',
    url: '/restar/una-cifra',
    image: '/monito-suma-g.jpeg',
    paragraph: 'Resta numeros de una cifra',
  },
  {
    avatar: '/src/assets/wall.webp',
    title: 'Restar',
    description: 'Dos Cifras',
    url: '/restar/dos-cifra',
    image: '/monito-suma-e.jpeg',
    paragraph: 'Resta numeros dos cifras',
  },
  {
    avatar: '/src/assets/wall.webp',
    title: 'Restar',
    description: 'Tres Cifras',
    url: '/restar/tres-cifra',
    image: '/monito-suma-f.jpeg',
    paragraph: 'Resta numeros tres cifras',
  },
  {
    avatar: '/src/assets/wall.webp',
    title: 'Multiplicar',
    description: 'Practica',
    url: '/multiplicar',
    image: '/monito-suma-e.jpeg',
    paragraph: 'Aprende las tablas',
  }
]

function Media() {

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-dark">
      {data.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345, m: 2, px: 2, borderRadius: 5, bgcolor: blueGrey[700] }}>
          <CardHeader
            avatar={
              <Avatar
                alt={item.title}
                src={item.avatar}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={item.title}
            subheader={item.description}
          />
          <Link to={`${item.url}`}>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.title}
            />
          </Link>
          <CardContent>
            <Typography variant="body2" color="text.secondary" component="p">
                {item.paragraph}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>

  );
}


export default function Matematica() {

  return (    
      <Media />
  )
}