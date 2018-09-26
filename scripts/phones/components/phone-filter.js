import Component from '../../common/component.js';

export default class PhoneFilter extends Component {
  constructor({element}) {
    super({element});
    this._element = element;

    this._render();
    this.on('change', '[data-element="sort-by-a"]', this._sort());
}


 _sort() {
    var parent = document.querySelector('[data-component="phone-catalog"]');
    var elems = parent.children;
        
    elems.sort(function(a, b) {
	        return b.querySelector('[data-element="phone-link"]').textContent - a.querySelector('[data-element="phone-link"]').textContent
	    }).forEach(function(el, i) {
	        parent[i].appendChild(el)
	    })
 } 


  _render() {
    this._element.innerHTML = `
<p>
    Search:
    <input>
</p>

<p>
    Sort by:
    <select>
        <option value="name" data-element="sort-by-a">Alphabetical</option>
        <option value="age" data-element="sort-by-date">Newest</option>
    </select> 
</p>
    `
  }
}
