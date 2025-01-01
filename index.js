import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

const App = () => {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
};

registerRootComponent(App);
