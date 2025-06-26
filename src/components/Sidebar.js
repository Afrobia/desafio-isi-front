import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-header">
          grupo <span>&copy;</span>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
                </svg>
                Dashboard
              </a>
            </li>
            <li className="active">
              <a href="#produtos">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10.5 11.25H21V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v5.25m17.25 0H10.5" />
                </svg>
                Produtos
              </a>
            </li>
            <li>
              <a href="#relatorios">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5H18a7.5 7.5 0 0 0-7.5-7.5Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H12a2.25 2.25 0 0 0-2.25 2.25V15m0 0l-3 3m3-3l3 3" />
                </svg>
                Relatórios
              </a>
            </li>
            <li>
              <a href="#administracao">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.318.686.67.86.417.213.74.498 1.01.86.28.373.502.73.612 1.086.17.56.27 1.139.27 1.741v.006c0 1.155-.427 2.243-1.207 3.023l-.15.15a2.25 2.25 0 0 1-1.59 2.245c-.21.054-.42.117-.63.187l-1.299.42c-.22.072-.47.109-.74.109h-.004c-.27 0-.52-.037-.74-.108l-1.299-.42c-.21-.07-.42-.133-.63-.188a2.25 2.25 0 0 1-1.59-2.245l-.15-.15A6.726 6.726 0 0 1 9 12.006v-.006c0-.602.1-1.18.27-1.74.11-.356.33-.713.61-1.087.27-.36.593-.646 1.01-.86.352-.173.607-.485.67-.86l.213-1.281Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Administração
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-footer">
        <a href="#sair">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
          </svg>
          Sair
        </a>
      </div>
    </div>
  );
}

export default Sidebar;