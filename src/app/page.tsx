import FeedbackButton from "./_components/feedback/feedback-button";
import PublicSiteHeader from "./_components/nav/public-site-header";

export default function Page() {
  return (
    <div>
      <PublicSiteHeader />
      
      <p className="m-10 text-center text-3xl font-bold">Home</p>
      <FeedbackButton/>
    </div>
  );
}
