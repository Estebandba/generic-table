/* 
 * Search for the attribute in the component
*/
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}