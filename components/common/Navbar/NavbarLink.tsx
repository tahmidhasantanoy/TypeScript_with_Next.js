/* export const leftMenus = [
    {label : "trade", href : "/"},
    {label : "Explore", href : "/"},
    {label : "Pool", href : "/"}
]

export const rightMenus = [
    {label : "Get the app", href : "/"},
    {label : "Connect", href : "/"},
] */

interface ILinks {
    label: string;
    href: string;
}

interface navbarLinks {
    // link: ILinks[]; // ❌ Property is named `link`, not `links`
    links : ILinks[];  // no error here
}

// const NavbarLinks= ({links} : navbarLinks) => { // Property 'links' does not exist on type 'ILinks[]'
const NavbarLinks= ({links} : {links : ILinks[]}) => { // Property 'links' does not exist on type 'ILinks[]'
    // When you drill props, it's mandatory to use the same name as the prop you passed

    return (
        <>
            {Array.isArray(links) && links?.map((menu : ILinks,index : number) => <p key={index}>{menu?.label}</p>)}
        </>
    )
}

export default NavbarLinks;