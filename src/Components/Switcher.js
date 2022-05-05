import Advising from './Advising';
import Build from './Build';
import Register from './Register';

export default function Switcher(props) {
  if (props.data === 'REGISTER') return <Build classes={props.classes} />;
  else if (props.data === 'BUILD') return <Register classes={props.classes} />;
  else return <Advising classes={props.classes} />;
}
