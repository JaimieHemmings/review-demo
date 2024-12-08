import { createContext, useState, ReactNode } from "react";
import { FeedbackType } from "../types/types";

interface FeedbackContextType {
  feedback: FeedbackType[];
  addFeedback: (newFeedback: FeedbackType) => void;
  deleteFeedback: (id: number) => void;
  editFeedback: (id: number) => void;
  feedbackEdit: {
    item: FeedbackType | {};
    edit: boolean;
  };
  updateFeedback: (id: number, newFeedback: FeedbackType) => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

interface FeedbackProviderProps {
  children: ReactNode;
}

export const FeedbackProvider: React.FC<FeedbackProviderProps> = ({ children }) => {
  const [feedback, setFeedback] = useState<FeedbackType[]>([
    {
      id: 1,
      text: 'This is a feedback',
      rating: 10
    }
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState<{
    item: FeedbackType | {};
    edit: boolean;
  }>({
    item: {},
    edit: false
  });

  const addFeedback = (newFeedback: FeedbackType) => {
    setFeedback([...feedback, newFeedback]);
  };

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (id: number) => {
    const item = feedback.find((item) => item.id === id);
    if (item) {
      setFeedbackEdit({ item, edit: true });
    }
  }

  const updateFeedback = (id: number, newFeedback: FeedbackType) => {
    setFeedback(
      feedback.map((item) => (id === item.id ? newFeedback : item)) 
    );
    setFeedbackEdit({ item: {}, edit: false });
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      addFeedback,
      deleteFeedback,
      editFeedback,
      feedbackEdit,
      updateFeedback
    }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;