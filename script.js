function getReactInstance(element) {
        for (const key in element) {
            if (key.startsWith('__reactInternalInstance$')) {
                return element[key];
            }
        }

    return null;
}

    function searchReactParents(node, predicate, maxDepth = 15, depth = 0) {
        try {
            if (predicate(node)) {
                return node;
            }
        } catch (_) {}

        if (!node || depth > maxDepth) {
            return null;
        }

        const {'return': parent} = node;
        if (parent) {
            return searchReactParents(parent, predicate, maxDepth, depth + 1);
        }

        return null;
    }
    function getCurrentPlayer() {
        let player;
        const PLAYER = '.player';
        try {
            const node = searchReactParents(
                getReactInstance($(PLAYER)),
                n => n.stateNode && n.stateNode.player
            );
            player = node.stateNode;
        } catch (_) {}

        return player;
    }

function add_button(){
        var cont = document.getElementsByClassName("tw-flex tw-flex-row")[1];
        var host = document.createElement('button');
        host.className = 'button button--icon-only float-left';
        host.id = "host-button";
        host.title = "Local host";
        cont.appendChild(host);
        host.onclick = add_input;
    }

    function close_inp(){
        document.getElementById('host-input').remove();
        add_button();
    }

    function add_input(){
        var cont = document.getElementsByClassName("tw-flex tw-flex-row")[1];
        var inp = document.createElement('input');
        inp.className = 'tw-block tw-font-size-7 tw-input';
        inp.autocapitalize = 'off';
        inp.autocomplete = 'off';
        inp.autocorrect = 'off';
        inp.placeholder = 'Channel name';
        inp.type = 'search';
        inp.id = 'host-input';
        inp.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                 var pl = window.getCurrentPlayer();
                 var channel = document.getElementById('host-input').value;
                 pl.player.player.setChannel(channel);
            }
        });
        cont.appendChild(inp);
        document.getElementById('host-button').remove();
        setTimeout(close_inp, 30*1000);
    }
    function load(){
        var css = "#host-button {   background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTQgNTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU0IDU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+PHBhdGggc3R5bGU9ImZpbGw6IzAwOTZFNjsiIGQ9Ik00OS4yMTcsNTNINC43ODNDMi42OTQsNTMsMSw1MS4zMDYsMSw0OS4yMTdWNC43ODNDMSwyLjY5NCwyLjY5NCwxLDQuNzgzLDFoNDQuNDM1QzUxLjMwNiwxLDUzLDIuNjk0LDUzLDQuNzgzdjQ0LjQzNUM1Myw1MS4zMDYsNTEuMzA2LDUzLDQ5LjIxNyw1M3oiLz48cGF0aCBzdHlsZT0iZmlsbDojMDA5NkU2OyIgZD0iTTQ5LjIxNyw1NEg0Ljc4M0MyLjE0Niw1NCwwLDUxLjg1NCwwLDQ5LjIxN1Y0Ljc4M0MwLDIuMTQ2LDIuMTQ2LDAsNC43ODMsMGg0NC40MzVDNTEuODU0LDAsNTQsMi4xNDYsNTQsNC43ODN2NDQuNDM0QzU0LDUxLjg1NCw1MS44NTQsNTQsNDkuMjE3LDU0eiBNNC43ODMsMkMzLjI0OSwyLDIsMy4yNDksMiw0Ljc4M3Y0NC40MzRDMiw1MC43NTEsMy4yNDksNTIsNC43ODMsNTJoNDQuNDM1QzUwLjc1MSw1Miw1Miw1MC43NTEsNTIsNDkuMjE3VjQuNzgzQzUyLDMuMjQ5LDUwLjc1MSwyLDQ5LjIxNywySDQuNzgzeiIvPjwvZz48Zz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTM5LjU0NCwyNy44NDFMMTguNDU2LDQwLjAxNkMxNy44MDksNDAuMzg5LDE3LDM5LjkyMiwxNywzOS4xNzVWMTQuODI1YzAtMC43NDcsMC44MDktMS4yMTUsMS40NTYtMC44NDFsMjEuMDg3LDEyLjE3NUM0MC4xOTEsMjYuNTMzLDQwLjE5MSwyNy40NjcsMzkuNTQ0LDI3Ljg0MXoiLz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTE3Ljk3Myw0MS4xNDdjLTEuMDg4LDAtMS45NzMtMC44ODUtMS45NzMtMS45NzN2LTI0LjM1YzAtMS4wODgsMC44ODUtMS45NzMsMS45NzMtMS45NzNjMC4zNDMsMCwwLjY4MywwLjA5MiwwLjk4NCwwLjI2NmwyMS4wODcsMTIuMTc1YzAuNjE3LDAuMzU2LDAuOTg2LDAuOTk1LDAuOTg2LDEuNzA3cy0wLjM2OSwxLjM1MS0wLjk4NiwxLjcwN0wxOC45NTcsNDAuODgyQzE4LjY1Niw0MS4wNTYsMTguMzE1LDQxLjE0NywxNy45NzMsNDEuMTQ3eiBNMTcuOTU3LDE0Ljg1MUwxOCwzOS4xMjVsMjEuMDQzLTEyLjE1TDE3Ljk1NywxNC44NTF6Ii8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=);  background-size: 20px;  background-position: center;    background-repeat: no-repeat;   cursor: pointer;    height: 30px;   width: 30px;    filter: grayscale(100%);    opacity: .9;}#host-button:hover {       filter: none;   opacity: 1;}#host-button.active {       filter: none;   opacity: 1; box-shadow: 0 0 6px 0 #7d5bbe,inset 0 0 0 1px rgba(100,65,164,.5);}"
        var styles = document.createElement('style');
        styles.type = 'text/css';
        styles.appendChild(document.createTextNode(css));
        document.head.appendChild(styles);
        add_button();
    }

    if(window.attachEvent) {
    window.attachEvent('onload', load);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            load();
        };
        window.onload = newonload;
    } else {
        window.onload = load;
    }
