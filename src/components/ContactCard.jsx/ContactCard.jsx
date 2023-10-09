import { useDispatch } from 'react-redux';
import { Card, CardBlock } from './ContactCard.Styled';
import { deleteContact } from 'redux/operations';

export const ContactCard = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(id));
  return (
    <CardBlock>
      <Card>
        <span>{name}</span>
        <span>{phone}</span>
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        {/* <button onClick={handleDelete}>Delete</button> */}
      </Card>
    </CardBlock>
  );
};
