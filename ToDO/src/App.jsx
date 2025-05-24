

const App = () => {
 return(
  <main className="main-todo">
    <section className="section-todo">
      <div className="container-add-todo">
      <input type="text" value="" className="input-task-todo"/>
      <button type="button">Añadir</button>
      </div>
      <div className="conatiner-list-todo">
      <button type="button">Eliminar completados</button>
      </div>
    </section>
  </main>
 )
  
}

export default App
