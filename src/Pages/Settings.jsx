import LeftMenu from "../components/General/LeftMenu";
import RightMenu from "../components/General/RightMenu";
import NavBar from "../components/General/NavBar";
import TitleBar from "../components/General/TitleBar";
import Setting from "../components/General/Setting";

function Settings(){
    return(
        <section>
            <NavBar/>
            <section className="flex h-dvh pt-[8vh] shadow-">
                <LeftMenu/>
                <div className="w-full md:w-3/5">
                    <TitleBar text={"Configurações"}/>
                    <Setting text={"Idioma"} toggle={true}/>
                    <Setting text={"Idioma"} toggle={false}/>
                    <Setting text={"Idioma"} toggle={true}/>
                    </div>
                <RightMenu/>
            </section>
        </section>
    );
}

export default Settings;