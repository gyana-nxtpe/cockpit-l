import { useNavigate } from "react-router-dom";

function useDelayedNavigate() {
  const navigate = useNavigate();

  const delayedNavigate = (to: string, delay = 2000) => {
    setTimeout(() => navigate('/cockpit-n/panel'+to), delay);
  };

  return delayedNavigate;
}

export default useDelayedNavigate;
