import { MobileHeader } from "@/components/mobileheader";
import { Sidebar } from "@/components/sidebar";

type Props = {
    children: React.ReactNode;
};

const Mainlayout = ({
    children,
}: Props) => {
    return(
        <div>
            <MobileHeader/>
            <Sidebar classname="hidden lg:flex"/>
            <main className="lg:pl-[256px] h-screen pt-[50px] lg:pt-0">
                <div className="max-w-[1056px] mx-auto pt-6  h-screen">
                {children}
                </div>
            </main>
            
        </div>
    );
};


export default Mainlayout;