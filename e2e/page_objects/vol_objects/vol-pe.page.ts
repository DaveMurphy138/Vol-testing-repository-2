import { $, element, by, browser, ExpectedConditions, ElementFinder } from "protractor";

export class VolPartsEntryPage{

    public nameSearchField = $("input#txtName");

    public customerSearchButton = $("button#btnsearchCust");

    public selectCustomerButton = $("button#btnselectCust");

    public searchResultsTable = $("div#gridcustomerSearchGrid");

    public searchResultsRowSelector = "div.ui-grid-cell-contents.ng-binding.ng-scope";

    public vehicleResultsTable = $("div#gridVehicleSearchGrid");

    public vehicleCellSelector = "div.grid-row.ng-scope.row-selected";

    public selectVehicleButton = $("button#btnselectCust")
}