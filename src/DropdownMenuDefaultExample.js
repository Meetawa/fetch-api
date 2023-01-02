import React from 'react';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuDefaultExample = () => {
  const Highest=()=>{
    AP.request('https://rahulsaini.atlassian.net/rest/api/2/priority/1', {
      success: function(responseText){
        alert(responseText);
      }
    });
  }
  const High=()=>{
    AP.request('https://rahulsaini.atlassian.net/rest/api/2/priority/2', {
      success: function(responseText){
        alert(responseText);
      }
    });
  }
  const Medium=()=>{
    AP.request('https://rahulsaini.atlassian.net/rest/api/2/priority/3', {
      success: function(responseText){
        alert(responseText);
      }
    });
  }
  const Low=()=>{
    AP.request('https://rahulsaini.atlassian.net/rest/api/2/priority/4', {
      success: function(responseText){
        alert(responseText);
      }
    });
  }
  const Lowest=()=>{
    AP.request('https://rahulsaini.atlassian.net/rest/api/2/priority/5', {
      success: function(responseText){
        alert(responseText);
      }
    });
  }
  return (
    <DropdownMenu trigger="Priorities">
      <DropdownItemGroup>
        <DropdownItem onClick={Highest}>Highest</DropdownItem>
        <DropdownItem onClick={High}>High</DropdownItem>
        <DropdownItem onClick={Medium}>Medium</DropdownItem>
        <DropdownItem onClick={Low}>Low</DropdownItem>
        <DropdownItem onClick={Lowest}>Lowest</DropdownItem>
      </DropdownItemGroup>
    </DropdownMenu>
  );
};

export default DropdownMenuDefaultExample;