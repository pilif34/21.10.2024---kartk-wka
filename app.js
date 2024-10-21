function ex1() {
    const input = document.createElement("input");
    const div = document.createElement("div");
    input.type = "color"
    div.style.border = "black 1px solid";
    div.style.height = "300px";
    div.style.width = "300px";
    document.body.appendChild(div);
    document.body.appendChild(input);

    input.addEventListener("input", ()=> {
        div.style.backgroundColor = input.value;
    })
}

function ex2() {
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.textContent = "Generuj link";
    document.body.appendChild(input);
    document.body.appendChild(button);
    button.addEventListener("click", ()=> {
        const a = document.createElement("a");
        a.href = `https://${input.value}/`
        a.textContent = input.value;
        a.target = "_blank";
        document.body.appendChild(a);
    })
}

function ex3() {
    const height = document.createElement("input");
    const width = document.createElement("input");
    const button = document.createElement("button");
    const div = document.createElement("div");
    const p = document.createElement("p")
    height.type = "number";
    width.type = "number";
    height.placeholder = "Wysokość";
    width.placeholder = "Szerokość";
    button.textContent = "Zmień rozmiar";
    div.style.border = "solid 1px black"
    document.body.appendChild(height);
    document.body.appendChild(width);
    document.body.appendChild(button);
    button.addEventListener("click", ()=> {
        div.style.height = `${height.value}px`;
        div.style.width = `${width.value}px`;
        p.textContent = `Aktualny rozmiar: ${height.value}px x ${width.value}px`
        document.body.appendChild(div)
        document.body.appendChild(p)
    })
}

function ex4() {
    const input = document.createElement("input");
    const button = document.createElement("button");
    const ul = document.createElement("ul");
    button.textContent = "Dodaj"
    document.body.appendChild(input);
    document.body.appendChild(button);
    document.body.appendChild(ul);
    button.addEventListener("click", ()=> {
        const li = document.createElement("li");
        const buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Delete";
        li.textContent = input.value;
        ul.appendChild(li);
        li.appendChild(buttonDelete);
        buttonDelete.addEventListener("click", ()=> {
            li.style.display = "none";
        })
    })
}