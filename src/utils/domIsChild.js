// 判断dom是否包含
function domIsChild(child, parent) {
    if (child && parent) {
        let parentNode = child;
        while (parentNode !== document.body) {
            if (parent == parentNode) {
                return true;
            }
            parentNode = parentNode.parentNode;
        }
    }
    return false;
}
export default domIsChild;