import { NavigateFunction } from 'react-router-dom';

let navigate: NavigateFunction | null = null;

export function setNavigate(n: NavigateFunction) {
  navigate = n;
}

export function getNavigate(): NavigateFunction {
  if (!navigate) {
    throw new Error('Navigate function is not set');
  }
  return navigate;
}
