import LeftMenu from "../components/General/LeftMenu";
import RightMenu from "../components/General/RightMenu";
import NavBar from "../components/General/NavBar";
import TitleBar from "../components/General/TitleBar";
import Filters from "../components/General/Filters";
import Notification from "../components/General/Notification";
import TopNavMobile from "../components/Mobile/TopNavMobile";
import NavBarMobile from "../components/Mobile/NavBarMobile";



function Notifications(){
    const notifications = [{id: 1, userImage: "assets/images/profile-picture.svg", nome: "Vitor Hugo da Cunha", tipo: "curtiu", post: null, data: "28/02/25", hora: "16:26"},{id: 1,  userImage: "assets/images/profile-picture.svg", nome: "Gabriel Grabowski Bosco", tipo: "comentou", post: "assets/images/purple-dog-image.png", data: "25/03/25", hora: "21:41"},{id: 1, userImage: "assets/images/profile-picture.svg",  nome: "João Constantino Caetano", tipo: "mencionou", post: "assets/images/beach-image.png", data: "25/03/25", hora: "21:41"}]
    return(
        <section>
            <NavBar/>
            <TopNavMobile />
            <section className="flex bg-user-icon pt-12 md:pt-[8vh] h-dvh">
                <LeftMenu/>
                <div className="w-full md:w-3/5 flex flex-col gap-6">
                    <TitleBar text={"Notificações"}/>
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
            <NavBarMobile />
        </section>
    );
}

export default Notifications;