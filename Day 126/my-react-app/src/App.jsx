import UserStatus from './UserStatus.jsx';
import DynamicImage from './DynamicImage.jsx';
import Greeting from './greeting.jsx';
import renderWelcomeMessage from './renderWelcomeMessage.jsx';
import TemplateStringExample from './TemplateStringExample.jsx';
import DynamicTagExample from './DynamicTagExample.jsx';
import NestedMapExample from './NestedMapExample.jsx';
import StringInterpolationExample from './StringInterpolationExample.jsx';
import TableExample from './TableExample.jsx';

function App() {
  const isLoggedIn = true;

  const imageProps = {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image"
  };

  const backgroundColor = isLoggedIn ? "lightgreen" : "lightcoral";

  const style = {
    backgroundColor: backgroundColor,
    padding: "20px",
    borderRadius: "5px"
  };

  return (
    <div style={style}>
      {renderWelcomeMessage()}
      <UserStatus isLoggedIn={isLoggedIn} />
      <Greeting name="Alice" />
      <DynamicImage imageProps={imageProps} />
      <TemplateStringExample />
      <DynamicTagExample />
      <NestedMapExample />
      <StringInterpolationExample />
      <TableExample />
    </div>
  );
}

export default App;