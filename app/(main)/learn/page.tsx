import { FeedWrapper } from "@/components/feedwrapper";
import { StickyWarpper } from "@/components/stickywrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/userprogress";

const LearnPage = () =>{
    return(
        <div className="flex flex-row-reverse gap-[48px] px-6 h-full">
            <StickyWarpper>
                <UserProgress activeCourse={{title:"Spanish", imageSrc:'/es.svg'}} hearts={5} points={100} hasActiveSubscription={false} />
            </StickyWarpper>
            <FeedWrapper>
                <Header title="Spanish"/>
            </FeedWrapper>
        </div>
    );
}

export default LearnPage;