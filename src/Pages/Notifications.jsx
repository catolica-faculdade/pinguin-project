import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";
import NavBar from "../components/NavBar";
import TitleBar from "../components/TitleBar";
import Filters from "../components/Filters";
import Notification from "../components/Notification";

function Notifications(){
    const notifications = [{id: 1, userImage: "/src/assets/images/profile-picture.svg", nome: "Vitor Hugo da Cunha", tipo: "curtiu", post: null, data: "28/02/25", hora: "16:26"},{id: 1,  userImage: "/src/assets/images/profile-picture.svg", nome: "Gabriel Grabowski Bosco", tipo: "comentou", post: "/src/assets/images/purple-dog-image.png", data: "25/03/25", hora: "21:41"},{id: 1, userImage: "/src/assets/images/profile-picture.svg",  nome: "João Constantino Caetano", tipo: "mencionou", post: "/src/assets/images/beach-image.png", data: "25/03/25", hora: "21:41"}]
    return(
        <section>
            <NavBar/>
            <section className="flex h-dvh pt-[8vh] shadow-">
                <LeftMenu/>
                <div className="w-full md:w-3/5">
                    <TitleBar />
                    <Filters/>
                    {notifications.map((notification) =>(
                        <Notification key={notification.id}
                        userImage={notification.userImage}      
                        nome={notification.nome}
                        tipo={notification.tipo}
                        post={notification.post}
                        data={notification.data}
                        hora={notification.hora}
                        />
                    ))}
                </div>
                <RightMenu/>
            </section>
        </section>
    );
}

export default Notifications;