import './Header.css'

const hClass={
      fontSize: "20px",
      backgroundColor: "blue"
};

function Header(){
  return <div style={hClass}>Header</div>
  // return <div id ="header">Header</div>
  // <div style={{color:'red', fontSize:'30px'}}>Header</div>
}

export default Header;