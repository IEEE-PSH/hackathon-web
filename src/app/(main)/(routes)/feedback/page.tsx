import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback | HackPSH",
  description: "Interview Test - Create Feedback",
}

type FeedbackFormProps = React.HTMLAttributes<HTMLDivElement>;

export default function FeedbackPage({ className, ...props }: FeedbackFormProps) {
  return (
    <div>
      <p className="m-10 text-3xl font-bold text-center">Feedback</p>
    </div>
  );
}