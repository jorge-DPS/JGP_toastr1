"use strict";
var KTDatatablesSearchOptionsAdvancedSearch = function () {
	$.fn.dataTable.Api.register("column().title()", function () {
		return $(this.header()).text().trim()
	});
	return {
		init: function () {
			var e;
			e = $("#kt_datatable").DataTable({
				responsive: !0,
				dom: `<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
				lengthMenu: [5, 10, 25, 50],
				pageLength: 10,
				language: {
					lengthMenu: "Display _MENU_"
				},
				searchDelay: 500,
				processing: !0,
				serverSide: !0,
				ajax: {
					url: HOST_URL + "/api//datatables/demos/server.php",
					type: "POST",
					data: {
						columnsDef: ["RecordID", "OrderID", "Country", "ShipCity", "CompanyAgent", "ShipDate", "Status", "Type", "Actions"]
					}
				},
				columns: [{
					data: "RecordID"
				}, {
					data: "OrderID"
				}, {
					data: "Country"
				}, {
					data: "ShipCity"
				}, {
					data: "CompanyAgent"
				}, {
					data: "ShipDate"
				}, {
					data: "Status"
				}, {
					data: "Type"
				}, {
					data: "Actions",
					responsivePriority: -1
				}],
				initComplete: function () {
					this.api().columns().every(function () {
						var t = this;
						switch (t.title()) {
							case "Country":
								t.data().unique().sort().each(function (t, a) {
									$('.datatable-input[data-col-index="2"]').append('<option value="' + t + '">' + t + "</option>")
								});
								break;
							case "Status":
								var e = {
									1: {
										title: "Pending",
										class: "label-light-primary"
									},
									2: {
										title: "Delivered",
										class: " label-light-danger"
									},
									3: {
										title: "Canceled",
										class: " label-light-primary"
									},
									4: {
										title: "Success",
										class: " label-light-success"
									},
									5: {
										title: "Info",
										class: " label-light-info"
									},
									6: {
										title: "Danger",
										class: " label-light-danger"
									},
									7: {
										title: "Warning",
										class: " label-light-warning"
									}
								};
								t.data().unique().sort().each(function (t, a) {
									$('.datatable-input[data-col-index="6"]').append('<option value="' + t + '">' + e[t].title + "</option>")
								});
								break;
							case "Type":
								e = {
									1: {
										title: "Online",
										state: "danger"
									},
									2: {
										title: "Retail",
										state: "primary"
									},
									3: {
										title: "Direct",
										state: "success"
									}
								};
								t.data().unique().sort().each(function (t, a) {
									$('.datatable-input[data-col-index="7"]').append('<option value="' + t + '">' + e[t].title + "</option>")
								})
						}
					})
				},
				columnDefs: [{
					targets: -1,
					title: "Actions",
					orderable: !1,
					render: function (t, a, e, l) {
						return '\t\t\t\t\t\t\t<div class="dropdown dropdown-inline">\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\t                                <i class="la la-cog"></i>\t                            </a>\t\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\t\t\t\t\t\t\t\t\t<ul class="nav nav-hoverable flex-column">\t\t\t\t\t\t\t    \t\t<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-edit"></i><span class="nav-text">Edit Details</span></a></li>\t\t\t\t\t\t\t    \t\t<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-leaf"></i><span class="nav-text">Update Status</span></a></li>\t\t\t\t\t\t\t    \t\t<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-print"></i><span class="nav-text">Print</span></a></li>\t\t\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t\t  \t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Edit details">\t\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\t\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t\t</a>\t\t\t\t\t\t'
					}
				}, {
					targets: 6,
					render: function (t, a, e, l) {
						var i = {
							1: {
								title: "Pending",
								class: "label-light-primary"
							},
							2: {
								title: "Delivered",
								class: " label-light-danger"
							},
							3: {
								title: "Canceled",
								class: " label-light-primary"
							},
							4: {
								title: "Success",
								class: " label-light-success"
							},
							5: {
								title: "Info",
								class: " label-light-info"
							},
							6: {
								title: "Danger",
								class: " label-light-danger"
							},
							7: {
								title: "Warning",
								class: " label-light-warning"
							}
						};
						return void 0 === i[t] ? t : '<span class="label label-lg font-weight-bold' + i[t].class + ' label-inline">' + i[t].title + "</span>"
					}
				}, {
					targets: 7,
					render: function (t, a, e, l) {
						var i = {
							1: {
								title: "Online",
								state: "danger"
							},
							2: {
								title: "Retail",
								state: "primary"
							},
							3: {
								title: "Direct",
								state: "success"
							}
						};
						return void 0 === i[t] ? t : '<span class="label label-' + i[t].state + ' label-dot mr-2"></span><span class="font-weight-bold text-' + i[t].state + '">' + i[t].title + "</span>"
					}
				}]
			}), $("#kt_search").on("click", function (t) {
				t.preventDefault();
				var a = {};
				$(".datatable-input").each(function () {
					var t = $(this).data("col-index");
					a[t] ? a[t] += "|" + $(this).val() : a[t] = $(this).val()
				}), $.each(a, function (t, a) {
					e.column(t).search(a || "", !1, !1)
				}), e.table().draw()
			}), $("#kt_reset").on("click", function (t) {
				t.preventDefault(), $(".datatable-input").each(function () {
					$(this).val(""), e.column($(this).data("col-index")).search("", !1, !1)
				}), e.table().draw()
			}), $("#kt_datepicker").datepicker({
				todayHighlight: !0,
				templates: {
					leftArrow: '<i class="la la-angle-left"></i>',
					rightArrow: '<i class="la la-angle-right"></i>'
				}
			})
		}
	}
}();
jQuery(document).ready(function () {
	KTDatatablesSearchOptionsAdvancedSearch.init()
});