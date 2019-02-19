        function getReactInstance(element) {
                for (const key in element) {
                    if (key.startsWith('__reactInternalInstance$')) {
                        return element[key];
                    }
                }

            return null;
        }
            
            function httpGet(url, key){
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open( "GET", url, false );
                xmlHttp.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
                xmlHttp.setRequestHeader("Client-ID", key);
                xmlHttp.send(null);
                return JSON.parse(xmlHttp.responseText);
            }
            function check_if_live(channel){
                var client_id = "6s6dddnzprew1myqaaddkbwxi2efwp";
                var resp = httpGet('https://api.twitch.tv/kraken/users?login='+channel,client_id);
                if (resp._total == 0){
                        return false;
                }
                var id = resp.users._id;
                resp = httpGet('https://api.twitch.tv/kraken/streams/'+id,client_id);
                if (resp.stream != null){
                        return true;
                }
                return false;
                
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
                var PL = 'player';
                var node = searchReactParents(
                        getReactInstance(document.getElementsByClassName(PL)[0]),
                        n => n.stateNode && n.stateNode.player
                );
                player = node.stateNode;
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
                         var pl = getCurrentPlayer();
                         var channel = document.getElementById('host-input').value;
                         if (check_if_live){
                                pl.player.player.setChannel(channel);
                         } else {
                                //todo: no stream found error
                         }
                    }
                });
                cont.appendChild(inp);
                document.getElementById('host-button').remove();
                setTimeout(close_inp, 30*1000);
            }
            function load(){
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
        }
