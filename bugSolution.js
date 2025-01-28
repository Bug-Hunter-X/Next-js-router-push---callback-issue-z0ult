```javascript
import {useRouter} from 'next/router';
import {useEffect} from 'react';

function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = (url) => {
      console.log('Navigation successful!', url);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  const handleClick = () => {
    router.push('/another-page');
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```