```javascript
import {useRouter} from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // Perform some action after navigation
    console.log('Navigation successful!');
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```