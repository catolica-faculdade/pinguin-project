import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";
import NavBar from "../components/NavBar";
import TitleBar from "../components/TitleBar";
import Setting from "../components/Setting";

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