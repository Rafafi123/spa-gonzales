
import './App.css';
import StudentCard from './StudentCard';
import p1 from './assets/p1.jpg';
import p2 from './assets/p2.jpg';
import p3 from './assets/p3.jpg';
import p4 from './assets/p4.jpg';

function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <StudentCard pic={p1} id={190845} name="Xian Nicole Baguitan" bday="December 12, 2000" qq="'I whip my hair back and forth.'" />
      <StudentCard pic={p2} id={190984} name="Amy Green" bday="August 13, 2000" qq="'Sometimes I run, sometimes I hide.'" />
      <StudentCard pic={p3} id={191234} name="Lewis Hamilton" bday="March 14, 2000" qq="'baby, baby, baby, oh.'" />
      <StudentCard pic={p4} id={195432} name="Fernando Alonso" bday="July 15, 2000" qq="'I can show you the world.'" />
    </div>
  );
}

export default App;
