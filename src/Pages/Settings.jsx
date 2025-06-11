import LeftMenu from "../components/General/LeftMenu";
import RightMenu from "../components/General/RightMenu";
import NavBar from "../components/General/NavBar";
import TitleBar from "../components/General/TitleBar";
import Setting from "../components/General/Setting";

function SettingsPage() {
    const [toggles, setToggles] = useState([
        { id: 1, checked: false },
        { id: 3, checked: false }
    ]);

    const handleToggle = (id) => {
        setToggles((prev) =>
        prev.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        )
        );
    };

    const getChecked = (id) => toggles.find((item) => item.id === id)?.checked ?? false;

    return (
        <section>
        <NavBar />
        <section className="flex h-dvh pt-[8vh]">
            <LeftMenu />
            <div className="w-full md:w-3/5">
            <TitleBar text={"Configurações"} />
            <Setting text={"Idioma"} toggle={true} id={1} checked={getChecked(1)} onToggle={handleToggle} />
            <Setting text={"Notificações"} toggle={false} id={2} link="/notificacoes" />
            <Setting text={"Modo escuro"} toggle={true} id={3} checked={getChecked(3)} onToggle={handleToggle} />
            <Setting text={"Conta"} toggle={false} id={4} link="/conta" />
            <Setting text={"Ajuda"} toggle={false} id={5} link="/ajuda" />
            </div>
            <RightMenu />
        </section>
        </section>
    );
}

export default SettingsPage;
