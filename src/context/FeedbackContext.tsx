import { createContext, useState, ReactNode, useEffect } from "react";
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
  isLoading: boolean;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

interface FeedbackProviderProps {
  children: ReactNode;
}

export const FeedbackProvider: React.FC<FeedbackProviderProps> = ({ children }) => {
  const [feedback, setFeedback] = useState<FeedbackType[]>([]);

  const [feedbackEdit, setFeedbackEdit] = useState<{
    item: FeedbackType | {};
    edit: boolean;
  }>({
    item: {},
    edit: false
  });

  const [isLoading, setIsLoading] = useState(true)

  // Load data on page load
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch data from API
  const fetchFeedback = async () => {
    try {
      const response = await fetch('http://localhost:5000/feedback');
      if(!response.ok) {
        throw new Error('Failed to fetch feedback');
      }
      const data = await response.json();
      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      console.error(`Failed to fetch feedback: ${error}`);
    }
  }

  const addFeedback = async (newFeedback: FeedbackType) => {
    const response = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  const deleteFeedback = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
        await fetch(`http://localhost:5000/feedback/${id}`, {
          method: 'DELETE',
        });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = async (id: number) => {
    const item = feedback.find((item) => item.id === id);
    
    if (item) {
      setFeedbackEdit({ item, edit: true });
    }
  }

  const updateFeedback = async (id: number, newFeedback: FeedbackType) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    });

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (id === item.id ? data : item)) 
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
      updateFeedback,
      isLoading
    }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;