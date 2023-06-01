import './style.css';
import bgCard from '../../assets/bg-card.jpg'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Tag } from '../Tag'
import { Button } from '../Button'

export const Card = () => {
  const handleClick = () => {
    console.log('Clicou')
  }

  return (
   <div tabIndex="1" className="container">
      <img src={bgCard} alt="foto de três pratos de comida" />

      <div className='line-tag'> 
        <Tag children="Novo" />
        <Text children="Saudável" />
      </div>

      <Heading children="Combo do almoço" />
      <Text children="Escolha 3 pratos para o seu almoço saudável." />
      <Button tabIndex="-1" children="Comprar" onClick={handleClick} />
   </div>
  );
}
