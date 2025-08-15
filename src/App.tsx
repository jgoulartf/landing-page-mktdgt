import { SchedulingProvider } from './contexts/SchedulingContext';
import { SchedulingFlow } from './components/SchedulingFlow';

function App() {
  return (
    <SchedulingProvider>
      <SchedulingFlow />
    </SchedulingProvider>
  );
}

export default App;