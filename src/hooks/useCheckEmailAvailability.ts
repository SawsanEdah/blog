import { useState } from "react";

export default function useCheckEmailAvailability() {
  const [enteredEmail, setEnteredEmail] = useState<null | string>(null);

  const checkEmailAvailability = async (email: string) => {
    setEnteredEmail(email);
  };

  const resetCheckEmailAvailability = () => {
    setEnteredEmail(null);
  };

  return {
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  };
}
