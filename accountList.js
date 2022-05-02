import { LightningElement, track, wire} from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class AccountList extends LightningElement {
    
    accountidfrmAccount;
    @wire(getAccountList) accounts;
   @track selectedRows
    
    handelClick(event){
        
            event.preventDefault();
            this.accountidfrmAccount = event.target.dataset.accountid;  
            console.log(this.accountidfrmAccount);

    
    }
    
    columns = [
        
        { label: 'Account Name', fieldName: 'Name' },
        { label: ' AccountId', fieldName: 'Id', type: 'id' }
        
    ];
    
    
}