 
 /* Developed By: Uday
 * Modified By: Ravi Kumar rathore
 * Created Date: 08/09/2017
 * Modified Date:
 * Database Table create Query constants
 */

var DATABASE_STRUCTURE = {
    CREATE_TABLE_GET_TABLE_INFO: "CREATE TABLE IF NOT EXISTS " + TABLES.GETTABLEINFO.TABLE + " ( " + TABLES.GETTABLEINFO.FULL_NAME
            + " TEXT, " + TABLES.GETTABLEINFO.DATE + " TEXT )",
    CREATE_TABLE_USER: "CREATE TABLE IF NOT EXISTS " + TABLES.USER.TABLE + " ( " + TABLES.USER.USER_ID + " INTEGER PRIMARY KEY, " +
            TABLES.USER.USER_NAME + " TEXT, " + TABLES.USER.PASSWORD + " TEXT, " + TABLES.USER.STATUS + " TEXT, " +
            TABLES.USER.AREA_RANGE + " TEXT, " + TABLES.USER.EMP_CODE + " TEXT, " + TABLES.USER.NAME + " TEXT, " +
            TABLES.USER.DESIGNATION + " TEXT, " + TABLES.USER.DATE_OF_JOINING + " TEXT, " +
            TABLES.USER.EXPENSE + " TEXT, " + TABLES.USER.TERRITORY + " TEXT, " +
            TABLES.USER.COMPANY_ID + " INTEGER, " + TABLES.USER.TEAM_ID + " INTEGER, " +
            TABLES.USER.U_STATUS + " INTEGER, " + TABLES.USER.R_DATE + " TEXT, " + TABLES.USER.PIN + " TEXT, " +
            TABLES.USER.INSTALLED + " TEXT, " + TABLES.USER.VERSION + " TEXT )",
    CREATE_TABLE_DAILY_REPORT: "CREATE TABLE IF NOT EXISTS " + TABLES.DAILY_REPORT.TABLE + " ( " + TABLES.DAILY_REPORT.ID
            + " INTEGER PRIMARY KEY AUTOINCREMENT, " + TABLES.DAILY_REPORT.DCR_SLNO + " INTEGER, " +
            TABLES.DAILY_REPORT.ACTIVITY_DATE_TIME + " DATETIME, " + TABLES.DAILY_REPORT.PERIOD + " INTEGER, " +
            TABLES.DAILY_REPORT.ACTIVITY_TYPE + " INTEGER, " +
            TABLES.DAILY_REPORT.DESCRIPTION + " TEXT, " + TABLES.DAILY_REPORT.CREATED_DATE + " TEXT, " +
            TABLES.DAILY_REPORT.SYNC + " CHAR(2), " + TABLES.DAILY_REPORT.STATUS + " CHAR(2), " + TABLES.DAILY_REPORT.LEAVE_TYPE + " TEXT )",
    CREATE_TABLE_PARAMETER: "CREATE TABLE IF NOT EXISTS " + TABLES.PARAMETER.TABLE + " ( " + TABLES.PARAMETER.SL_NO + " INTEGER PRIMARY KEY, "
            + TABLES.PARAMETER.PARTICULAR + " TEXT, " + TABLES.PARAMETER.DATE + " TEXT, " + TABLES.PARAMETER.STATUS + " VARCHAR(5), "
            + TABLES.PARAMETER.MONTH + " INTEGER, " + TABLES.PARAMETER.YEAR + " INTEGER, " + TABLES.PARAMETER.DAYS + " INTEGER)",
    CREATE_TABLE_DCR_DOCTOR: "CREATE TABLE  IF NOT EXISTS " + TABLES.DCR_DOCTOR.TABLE + " ( " + TABLES.DCR_DOCTOR.DCR_DOCTOR_SL_NO + " INTEGER  PRIMARY KEY,"
            + TABLES.DCR_DOCTOR.DCR_SL_NO + " INTEGER, " + TABLES.DCR_DOCTOR.DOCTOR_SL_NO + " INTEGER, " + TABLES.DCR_DOCTOR.TIME_SPENT + " INTEGER,"
            + TABLES.DCR_DOCTOR.WORKED_WITH + " TEXT," + TABLES.DCR_DOCTOR.REQUEST + " TEXT," + TABLES.DCR_DOCTOR.REQUEST_DATE + " TEXT,"
            + TABLES.DCR_DOCTOR.OBJECTION + " TEXT," + TABLES.DCR_DOCTOR.OBJECTION_CATEGORY + " INTEGER," + TABLES.DCR_DOCTOR.REMARK + " TEXT,"
            + TABLES.DCR_DOCTOR.RATE + " INTEGER," + TABLES.DCR_DOCTOR.C_DATE + " TEXT," + TABLES.DCR_DOCTOR.CAMPAIGN + " TEXT," + TABLES.DCR_DOCTOR.STATUS
            + " TEXT," + TABLES.DCR_DOCTOR.SYS_START_TIME + " TEXT," + TABLES.DCR_DOCTOR.SYS_END_TIME + " TEXT)",
    CREATE_TABLE_DCR_STOCKIST: "CREATE TABLE IF NOT EXISTS " + TABLES.DCR_STOCKIST.TABLE + " ( " + TABLES.DCR_STOCKIST.DCR_STOCK_ID + " INTEGER PRIMARY KEY," +
            TABLES.DCR_STOCKIST.DCR_SL_NO + " INTEGER ," + TABLES.DCR_STOCKIST.STOCKIST_ID + " INTEGER," + TABLES.DCR_STOCKIST.DOB + " INTEGER ," +
            TABLES.DCR_STOCKIST.WORKED_WITH + " TEXT," + TABLES.DCR_STOCKIST.TIME_SPENT + " TEXT," + TABLES.DCR_STOCKIST.C_DATE + " TEXT," +
            TABLES.DCR_STOCKIST.SYS_END_TIME + " TEXT)",
    CREATE_TABLE_DCR_CHEMIST: " CREATE TABLE IF NOT EXISTS " + TABLES.DCR_CHEMIST.TABLE + " ( " + TABLES.DCR_CHEMIST.DCR_CHEMIST_SLNO
            + " INTEGER PRIMARY KEY, " + TABLES.DCR_CHEMIST.DCR_SL_NO + " INTEGER," + TABLES.DCR_CHEMIST.CHEMIST_ID + " INTEGER ," +
            TABLES.DCR_CHEMIST.WORKED_WITH + " TEXT, " + TABLES.DCR_CHEMIST.TIME_SPENT + " TEXT," + TABLES.DCR_CHEMIST.C_DATE + " TEXT," +
            TABLES.DCR_CHEMIST.CAMPAIGN + " TEXT," + TABLES.DCR_CHEMIST.SYS_END_TIME + " TEXT)",
    CREATE_TABLE_DCR_UNLISTED_DOCTORS: "CREATE TABLE IF NOT EXISTS  " + TABLES.DCRUNLISTEDDOCTORS.TABLE + " ( " + TABLES.DCRUNLISTEDDOCTORS.DCR_UNLIST_ED_DOCTOR_SL_NO
            + " INTEGER PRIMARY KEY ," + TABLES.DCRUNLISTEDDOCTORS.DCR_SL_NO + " INTEGER," + TABLES.DCRUNLISTEDDOCTORS.DOCTOR_NAME + "  TEXT ,"
            + TABLES.DCRUNLISTEDDOCTORS.SPECIALITY_ID + " INTEGER," + TABLES.DCRUNLISTEDDOCTORS.CLASSIFICATION + " INTEGER,"
            + TABLES.DCRUNLISTEDDOCTORS.WORKED_WITH + " TEXT," + TABLES.DCRUNLISTEDDOCTORS.TIME_SPENT + " TEXT," + TABLES.DCRUNLISTEDDOCTORS.C_DATE
            + " TEXT," + TABLES.DCRUNLISTEDDOCTORS.STATUS + " TEXT," + TABLES.DCRUNLISTEDDOCTORS.SYS_START_TIME + " TEXT," + TABLES.DCRUNLISTEDDOCTORS.SYS_END_TIME + " TEXT)",
    CREATE_TABLE_SPECIALITY: "CREATE TABLE IF NOT EXISTS  " + TABLES.SPECIALITY.TABLE + "(" + TABLES.SPECIALITY.SPEC_ID + " INTEGER PRIMARY KEY," + TABLES.SPECIALITY.NAME
            + " TEXT," + TABLES.SPECIALITY.S_NAME + " TEXT)",
    CREATE_TABLE_DOCTOR_INFO: "CREATE TABLE IF NOT EXISTS  " + TABLES.DOCTOR_INFO.TABLE + "(" + TABLES.DOCTOR_INFO.DOCTOR_SL_NO + " INTEGER PRIMARY KEY," +
            TABLES.DOCTOR_INFO.REGISTRATION_NO + " INTEGER," + TABLES.DOCTOR_INFO.NAME + " TEXT," + TABLES.DOCTOR_INFO.CLASSIFICATION + " TEXT," +
            TABLES.DOCTOR_INFO.MOBILE_NO + " INTEGER," + TABLES.DOCTOR_INFO.SPECIALITY_ID + " TEXT," + TABLES.DOCTOR_INFO.MARKET_AREA_ID + " INTEGER," 
            +TABLES.DOCTOR_INFO.LATITUDE+" INTEGER,"+TABLES.DOCTOR_INFO.LONGITUDE+" INTEGER)",
    CREATE_TABLE_STOCKIST: "CREATE TABLE IF NOT EXISTS  " + TABLES.STOCKIST.TABLE + "(" + TABLES.STOCKIST.STOCKIST_ID + " INTEGER PRIMARY KEY, "
            + TABLES.STOCKIST.NAME + " TEXT," + TABLES.STOCKIST.MARKET_AREA_ID + " INTEGER," + TABLES.STOCKIST.PHONE + " INTEGER," + TABLES.STOCKIST.CODE + " TEXT,"
            + TABLES.STOCKIST.CITY + " INTEGER," 
            + TABLES.CHEMISTS.LATITUDE+" INTEGER,"+TABLES.CHEMISTS.LONGITUDE+" INTEGER)",
    CREATE_TABLE_CHEMISTS: "CREATE TABLE IF NOT EXISTS " + TABLES.CHEMISTS.TABLE + "(" + TABLES.CHEMISTS.CHEMIST_ID + " INTEGER PRIMARY KEY,"
            + TABLES.CHEMISTS.NAME + " TEXT," + TABLES.CHEMISTS.MARKET_AREA_ID + " INTEGER," + TABLES.CHEMISTS.PHONE + " INTEGER," 
            + TABLES.CHEMISTS.LATITUDE+" INTEGER,"+TABLES.CHEMISTS.LONGITUDE+" INTEGER)",
    CREATE_TABLE_MARKET_AREA: "CREATE TABLE IF NOT EXISTS " + TABLES.MARKET_AREA.TABLE + "(" + TABLES.MARKET_AREA.MARKET_AREA_ID + " INTEGER,"
            + TABLES.MARKET_AREA.MARKET_AREA + " TEXT)",
    CREATE_TABLE_ACTIVITY: "CREATE TABLE IF NOT EXISTS " + TABLES.ACTIVITY.TABLE + "(" + TABLES.ACTIVITY.ACTIVITY_TYPE_ID + " INTEGER, "
            + TABLES.ACTIVITY.ACTIVITY_NAME + " TEXT)",
    CREATE_TABLE_PRODUCT_GROUPS: "CREATE TABLE IF NOT EXISTS  " + TABLES.PRODUCTGROUPS.TABLE + "(" + TABLES.PRODUCTGROUPS.PRODUCT_GROUP_ID + " INTEGER," +
            TABLES.PRODUCTGROUPS.PRODUCT_GROUP_NAME + " TEXT)",
    CREATE_TABLE_KEY_MSG: "CREATE TABLE IF NOT EXISTS  " + TABLES.KEY_MSG.TABLE + "(" + TABLES.KEY_MSG.KEY_ID + " INTEGER," +
            TABLES.KEY_MSG.BRAND_ID + " INTEGER," + TABLES.KEY_MSG.KEY_CODE + " TEXT)",
    CREATE_TABLE_SAMPLES: "CREATE TABLE IF NOT EXISTS " + TABLES.SAMPLES.TABLE + "(" + TABLES.SAMPLES.SAMPLE_ID + " INTEGER," +
            TABLES.SAMPLES.SAMPLE_NAME + " TEXT," + TABLES.SAMPLES.PRODUCT_GROUP_ID + " INTEGER," +
            TABLES.SAMPLES.UNIT_OF_MEASURE + " TEXT," + TABLES.SAMPLES.PRODUCT_TYPE_ID + " TEXT,"
            + TABLES.SAMPLES.RATE + " INTEGER)",
    CREATE_TABLE_DCR_D_DETAILING: "CREATE TABLE IF NOT EXISTS " + TABLES.DCRDDETAILING.TABLE + "(" + TABLES.DCRDDETAILING.DCR_DOCTOR_SL_NO + " INTEGER,"
            + TABLES.DCRDDETAILING.BRAND_ID + " TEXT, " + TABLES.DCRDDETAILING.KEY_MESSAGE + " TEXT)",
    CREATE_TABLE_DCR_D_SAMPLE_DETAILS: "CREATE TABLE IF NOT EXISTS " + TABLES.DCRDSAMPLEDETAILS.TABLE + "(" + TABLES.DCRDSAMPLEDETAILS.DCR_DOCTOR_SL_NO + " INTEGER ,"
            + TABLES.DCRDSAMPLEDETAILS.SIGNATURE + " TEXT, " + TABLES.DCRDSAMPLEDETAILS.QUANTITY + " TEXT, " + TABLES.DCRDSAMPLEDETAILS.SAMPLE_ID + " TEXT)",
    CREATE_TABLE_CLASS: "CREATE TABLE IF NOT EXISTS " + TABLES.CLASS.TABLE + "(" + TABLES.CLASS.CLASS_ID + " INTEGER PRIMARY KEY,"
            + TABLES.CLASS.NAME + " TEXT)",
    CREATE_TABLE_CATEGORY: "CREATE TABLE IF NOT EXISTS " + TABLES.CATEGORY.TABLE + "(" + TABLES.CATEGORY.CATEGORY_ID + " INTEGER PRIMARY KEY,"
            + TABLES.CATEGORY.CATEGORY_NAME + " TEXT)",
    CREATE_TABLE_RATING: "CREATE TABLE IF NOT EXISTS " + TABLES.RATING.TABLE + "(" + TABLES.RATING.RATING_ID + " INTEGER PRIMARY KEY," +
            TABLES.RATING.RATING_NAME + " TEXT)",
    CREATE_TABLE_CALL_PLAN: "CREATE TABLE IF NOT EXISTS " + TABLES.CALLPLAN.TABLE + "(" + TABLES.CALLPLAN.DCR_DOCTOR_SLNO + " INTEGER," + TABLES.CALLPLAN.DATE + " TEXT)",
    CREATE_TABLE_RESIGN: "CREATE TABLE IF NOT EXISTS " + TABLES.RESIGN.TABLE + "(" + TABLES.RESIGN.STATUS + " TEXT)",
    CREATE_TABLE_MAP_P_TABLE: "CREATE TABLE IF NOT EXISTS " + TABLES.MAPPTABLE.TABLE + "(" +
            TABLES.MAPPTABLE.DATE + " TEXT," + TABLES.MAPPTABLE.PERIOD + " INTEGER," + TABLES.MAPPTABLE.TYPE + " INTEGER)",
    CREATE_TABLE_CITY: "CREATE TABLE IF NOT EXISTS " + TABLES.CITY.TABLE + "(" + TABLES.CITY.CITY_ID + " INTEGER," + TABLES.CITY.NAME + " TEXT)",
//    CREATE_TABLE_effortKPI: "CREATE TABLE IF NOT EXISTS " + TABLES.effortKPI.TABLE + "(",
//    CREATE_TABLE_SALES: "CREATE TABLE IF NOT EXISTS " + TABLES.SALES.TABLE + "(",
//   
//    CREATE_TABLE_COMMUNICATIONPAD: "CREATE TABLE IF NOT EXISTS " + TABLES.COMMUNICATIONPAD.TABLE + "(",
    CREATE_TABLE_STOCK_SALES_MASTER: "CREATE TABLE IF NOT EXISTS " + TABLES.STOCK_SALES_MASTER.TABLE + "(" + TABLES.STOCK_SALES_MASTER.SSS_ID + " INTEGER," +
            TABLES.STOCK_SALES_MASTER.STOCKIST_ID + " INTEGER," + TABLES.STOCK_SALES_MASTER.DATE_CREATED + " TEXT," + TABLES.STOCK_SALES_MASTER.YEAR + " INTEGER," +
            TABLES.STOCK_SALES_MASTER.MONTH + " INTEGER," + TABLES.STOCK_SALES_MASTER.SUBMITTED_STATUS + " TEXT," + TABLES.STOCK_SALES_MASTER.SYNCH_STATUS + " TEXT," +
            TABLES.STOCK_SALES_MASTER.SUBMITTED_DATE + " TEXT ," + TABLES.STOCK_SALES_MASTER.FS_STATUS + " INTEGER)",
    CREATE_TABLE_STOCK_SALES_DETAILS: "CREATE TABLE IF NOT EXISTS " + TABLES.STOCK_SALES_DETAILS.TABLE + "(" + TABLES.STOCK_SALES_DETAILS.SSS_ID + " INTEGER," +
            TABLES.STOCK_SALES_DETAILS.SKU_ID + " INTEGER," + TABLES.STOCK_SALES_DETAILS.OPENING_BALANCE + " DECIMAL(10,2)," +
            TABLES.STOCK_SALES_DETAILS.RECEIPT + " DECIMAL(10,2)," + TABLES.STOCK_SALES_DETAILS.PURCHASE_RETURN + " DECIMAL(10,2)," +
            TABLES.STOCK_SALES_DETAILS.SECONDARY_SALES + " DECIMAL(10,2)," + TABLES.STOCK_SALES_DETAILS.SALES_RETURN + " DECIMAL(10,2)," +
            TABLES.STOCK_SALES_DETAILS.CLOSING_STOCK + " DECIMAL(10,2)," + TABLES.STOCK_SALES_DETAILS.SINK_STATUS + " TEXT)",
    CREATE_TABLE_SKUMAT: "CREATE TABLE IF NOT EXISTS " + TABLES.SKUMAT.TABLE + "(" + TABLES.SKUMAT.CODE + " TEXT," + TABLES.SKUMAT.NAME + " TEXT," +
            TABLES.SKUMAT.BRANDNAME + " TEXT)",
    CREATE_TABLE_SS_PARAMETER: "CREATE TABLE IF NOT EXISTS " + TABLES.SS_PARAMETER.TABLE + "(" + TABLES.SS_PARAMETER.SS_ENTRY + " INTEGER," +
            TABLES.SS_PARAMETER.CS_ENTRY + " INTEGER," + TABLES.SS_PARAMETER.PR_ENTRY + " INTEGER," + TABLES.SS_PARAMETER.SR_ENTRY + " INTEGER," +
            TABLES.SS_PARAMETER.OS_ENTRY + " INTEGER," + TABLES.SS_PARAMETER.RT_ENTRY + " INTEGER," + TABLES.SS_PARAMETER.CUT_OFF_DAY + " INTEGER," +
            TABLES.SS_PARAMETER.WARNING_DAY + " INTEGER)",
    CREATE_TABLE_RCPA_CHEMISTDOCTORMAP: "CREATE TABLE IF NOT EXISTS " + TABLES.RCPA_CHEMISTDOCTORMAP.TABLE + "(" + TABLES.RCPA_CHEMISTDOCTORMAP.CHEMIST_ID + " INTEGER," +
            TABLES.RCPA_CHEMISTDOCTORMAP.DOCTOR_SL_NO + " INTEGER)",
    CREATE_TABLE_RCPA_BRANDCOMPETITORMAP: "CREATE TABLE IF NOT EXISTS " + TABLES.RCPA_BRANDCOMPETITORMAP.TABLE + "(" + TABLES.RCPA_BRANDCOMPETITORMAP.PRODUCT_GROUP_ID + " INTEGER," +
            TABLES.RCPA_BRANDCOMPETITORMAP.COMPETITOR_ID + " INTEGER," + TABLES.RCPA_BRANDCOMPETITORMAP.COMPETITOR_NAME + " TEXT," + TABLES.RCPA_BRANDCOMPETITORMAP.MOLECULE + " TEXT)",
    CREATE_TABLE_RCPA_MARKETINTELLIGENCE: "CREATE TABLE IF NOT EXISTS " + TABLES.RCPA_MARKETINTELLIGENCE.TABLE + "(" + TABLES.RCPA_MARKETINTELLIGENCE.MARKET_INTELLIGENCE_ID +
            " INTEGER PRIMARY KEY," + TABLES.RCPA_MARKETINTELLIGENCE.MARKET_INTELLIGENCE_NAME + " TEXT," + TABLES.RCPA_MARKETINTELLIGENCE.REMARKS + " TEXT)",
    CREATE_TABLE_RCPA_ADDENTRY: "CREATE TABLE IF NOT EXISTS " + TABLES.RCPA_ADDENTRY.TABLE + "(" + TABLES.RCPA_ADDENTRY.RCPA_ID + " INTEGER PRIMARY KEY," +
            TABLES.RCPA_ADDENTRY.ACTIVITY_DATE + " DATETIME," + TABLES.RCPA_ADDENTRY.CHEMIST_ID + " INTEGER," + TABLES.RCPA_ADDENTRY.DOCTOR_SL_NO + " INTEGER," +
            TABLES.RCPA_ADDENTRY.PRODUCT_GROUP_ID + " INTEGER," + TABLES.RCPA_ADDENTRY.TOTAL_RX + " DECIMAL(10,2)," + TABLES.RCPA_ADDENTRY.MOLECULE + " TEXT," +
            TABLES.RCPA_ADDENTRY.BRAND_RX + " DECIMAL(10,2)," + TABLES.RCPA_ADDENTRY.COMPETITOR_ID1 + " INTEGER," + TABLES.RCPA_ADDENTRY.COMPETITOR_RX1 + " DECIMAL(10,2)," +
            TABLES.RCPA_ADDENTRY.COMPETITOR_ID2 + " INTEGER," + TABLES.RCPA_ADDENTRY.COMPETITOR_RX2 + " DECIMAL(10,2)," + TABLES.RCPA_ADDENTRY.COMPETITOR_ID3 + " INTEGER," +
            TABLES.RCPA_ADDENTRY.COMPETITOR_RX3 + " DECIMAL(10,2)," + TABLES.RCPA_ADDENTRY.COMPETITOR_ID4 + " INTEGER," + TABLES.RCPA_ADDENTRY.COMPETITOR_RX4 + " DECIMAL(10,2)," +
            TABLES.RCPA_ADDENTRY.COMPETITOR_ID5 + " INTEGER," + TABLES.RCPA_ADDENTRY.COMPETITOR_RX5 + " DECIMAL(10,2)," + TABLES.RCPA_ADDENTRY.MARKET_INTELLIGENCE_ID + " INTEGER," +
            TABLES.RCPA_ADDENTRY.MI_REMARKS + " TEXT," + TABLES.RCPA_ADDENTRY.RCPA_STATUS + " TEXT," + TABLES.RCPA_ADDENTRY.RCPA_SYNC + " TEXT)",
    CREATE_TABLE_RCPA_ADDENTRYCHEMIST: "CREATE TABLE IF NOT EXISTS " + TABLES.RCPA_ADDENTRYCHEMIST.TABLE + "(" + TABLES.RCPA_ADDENTRYCHEMIST.RCPA_ID + " INTEGER PRIMARY KEY," +
            TABLES.RCPA_ADDENTRYCHEMIST.CHEMIST_ID + " INTEGER," + TABLES.RCPA_ADDENTRYCHEMIST.ACTIVITY_DATE + " TEXT," + TABLES.RCPA_ADDENTRYCHEMIST.RCPA_SYNC_STATUS_CHEMIST
            + " TEXT," + TABLES.RCPA_ADDENTRYCHEMIST.RCPA_STATUS_CHEMIST + " TEXT," + TABLES.RCPA_ADDENTRYCHEMIST.FINAL_STATUS_CHEMIST + " TEXT," +
            TABLES.RCPA_ADDENTRYCHEMIST.RCPA_SYNC_STATUS_MI + " TEXT)",
    CREATE_TABLE_RCPA_ADDENTRYBRAND: "CREATE TABLE IF NOT EXISTS " + TABLES.RCPA_ADDENTRYBRAND.TABLE + "(" + TABLES.RCPA_ADDENTRYBRAND.RCPA_ID + " INTEGER," +
            TABLES.RCPA_ADDENTRYBRAND.DOCTOR_SL_NO + " INTEGER," + TABLES.RCPA_ADDENTRYBRAND.PRODUCT_GROUP_ID + " INTEGER," + TABLES.RCPA_ADDENTRYBRAND.TOTAL_RX + " DECIMAL(10,2)," +
            TABLES.RCPA_ADDENTRYBRAND.MOLECULE + " TEXT," + TABLES.RCPA_ADDENTRYBRAND.BRAND_RX + " DECIMAL(10,2)," + TABLES.RCPA_ADDENTRYBRAND.COMPETITOR_ID1 + " INTEGER," +
            TABLES.RCPA_ADDENTRYBRAND.COMPETITOR_RX1 + " DECIMAL(10,2)," + TABLES.RCPA_ADDENTRYBRAND.COMPETITOR_ID2 + " INTEGER," +
            TABLES.RCPA_ADDENTRYBRAND.COMPETITOR_RX2 + " DECIMAL(10,2)," + TABLES.RCPA_ADDENTRYBRAND.COMPETITOR_ID3 + " INTEGER," +
            TABLES.RCPA_ADDENTRYBRAND.COMPETITOR_RX3 + " DECIMAL(10,2)," + TABLES.RCPA_ADDENTRYBRAND.COMPETITOR_ID4 + " INTEGER," +
            TABLES.RCPA_ADDENTRYBRAND.COMPETITOR_RX4 + " DECIMAL(10,2)," + TABLES.RCPA_ADDENTRYBRAND.COMPETITOR_ID5 + " INTEGER," +
            TABLES.RCPA_ADDENTRYBRAND.COMPETITOR_RX5 + " DECIMAL(10,2)," + TABLES.RCPA_ADDENTRYBRAND.RCPA_SYNC_STATUS_BRAND + " TEXT)",
    CREATE_TABLE_RCPA_ADDENTRYMARKETINTELLIGENCESSSS: "CREATE TABLE IF NOT EXISTS " + TABLES.RCPA_ADDENTRYMARKETINTELLIGENCESSSS.TABLE + "("
            + TABLES.RCPA_ADDENTRYMARKETINTELLIGENCESSSS.RCPA_ID + " INTEGER," + TABLES.RCPA_ADDENTRYMARKETINTELLIGENCESSSS.MARKET_INTELLIGENCE_ID + " INTEGER," +
            TABLES.RCPA_ADDENTRYMARKETINTELLIGENCESSSS.MI_REMARKS + " TEXT," + TABLES.RCPA_ADDENTRYMARKETINTELLIGENCESSSS.MI_STATUS + " TEXT)",
    CREATE_TABLE_LOCTION_INFO: "CREATE TABLE IF NOT EXISTS " + TABLES.LOCTION_INFO.TABLE + "(" + TABLES.LOCTION_INFO.DCR_ID + " INTEGER," +
            TABLES.LOCTION_INFO.L_CALL_ID + " INTEGER," + TABLES.LOCTION_INFO.DOCUMENT_ID + " INTEGER," + TABLES.LOCTION_INFO.LAT + " TEXT," +
            TABLES.LOCTION_INFO.LONG + " TEXT," + TABLES.LOCTION_INFO.DCR_DOCTOR_SLNO + " INTEGER," + TABLES.LOCTION_INFO.DOCUMENT_TO + " TEXT) ",
    CREATE_TABLE_DCR_LOCK: "CREATE TABLE IF NOT EXISTS " + TABLES.DCRLOCK.TABLE + "(" + TABLES.DCRLOCK.USER_ID + " INTEGER," + TABLES.DCRLOCK.ACTIVITY_DATE + " DATETIME," +
            TABLES.DCRLOCK.UNLOCK + " INTEGER," + TABLES.DCRLOCK.DATE + " TEXT," + TABLES.DCRLOCK.SYNC_STATUS + " TEXT," + TABLES.DCRLOCK.UPDATE + " TEXT )",
    CREATE_TABLE_CAMPAIGN_PLAN: "CREATE TABLE IF NOT EXISTS " + TABLES.CAMPAIGNPLAN.TABLE + "(" + TABLES.CAMPAIGNPLAN.CAMPAIGN_ID + " INTEGER," +
            TABLES.CAMPAIGNPLAN.NAME + " TEXT," + TABLES.CAMPAIGNPLAN.STATUS_CODE + " TEXT," + TABLES.CAMPAIGNPLAN.FROM_DATE + " DATE," +
            TABLES.CAMPAIGNPLAN.TO_DATE + " DATE," + TABLES.CAMPAIGNPLAN.CHEMIST_ID + " INTEGER," + TABLES.CAMPAIGNPLAN.DOCTOR_SL_NO + " INTEGER)",
    CREATE_TABLE_FEEDBACK_INFO: "CREATE TABLE IF NOT EXISTS " + TABLES.FEEDBACKINFO.TABLE + "(" + TABLES.FEEDBACKINFO.ID + " INTEGER," +
            TABLES.FEEDBACKINFO.NAME + " TEXT," + TABLES.FEEDBACKINFO.RATING + " INTEGER," + TABLES.FEEDBACKINFO.DELETED + " INTEGER)",
    CREATE_TABLE_FILETYPE: "CREATE TABLE IF NOT EXISTS " + TABLES.FILETYPE.TABLE + "(" + TABLES.FILETYPE.ID + " INTEGER," + TABLES.FILETYPE.NAME + " TEXT," +
            TABLES.FILETYPE.DELETED + " INTEGER)",
    CREATE_TABLE_E_GROUP: "CREATE TABLE IF NOT EXISTS " + TABLES.EGROUP.TABLE + "(" + TABLES.EGROUP.ID + " INTEGER," + TABLES.EGROUP.NAME + " TEXT," +
            TABLES.EGROUP.DELETED + " INTEGER)",
    CREATE_TABLE_FAVOURITE: "CREATE TABLE IF NOT EXISTS " + TABLES.FAVOURITE.TABLE + "(" + TABLES.FAVOURITE.ID + " INTEGER PRIMARY KEY AUTOINCREMENT ," +
            TABLES.FAVOURITE.NAME + " TEXT," + TABLES.FAVOURITE.DELETED + " INTEGER)",
    CREATE_TABLE_FAVOURITE_DETAIL: "CREATE TABLE IF NOT EXISTS " + TABLES.FAVOURITEDETAIL.TABLE + "(" + TABLES.FAVOURITEDETAIL.FAVOURITE_ID + " INTEGER," +
            TABLES.FAVOURITEDETAIL.BRAND + " INTEGER," + TABLES.FAVOURITEDETAIL.CONTENT + " INTEGER)",
    CREATE_TABLE_EBRANDS: "CREATE TABLE IF NOT EXISTS " + TABLES.EBRANDS.TABLE + "(" + TABLES.EBRANDS.DCRDOCTOR_SLNO + " INTEGER ," +
            TABLES.EBRANDS.DCR_SL_NO + "INTEGER," + TABLES.EBRANDS.BRAND_ID + " INTEGER," + TABLES.EBRANDS.KEY_ID + " INTEGER," +
            TABLES.EBRANDS.TIME + " INTEGER," + TABLES.EBRANDS.CONTENT_ID + " INTEGER," + TABLES.EBRANDS.FEEDBCK_ID + " INTEGER)",
    CREATE_TABLE_EUNLISTEDBRANDS: "CREATE TABLE IF NOT EXISTS " + TABLES.EUNLISTEDBRANDS.TABLE + "(" + TABLES.EUNLISTEDBRANDS.DCR_UL_DOCTOR_SLNO + " INTEGER ," +
            TABLES.EUNLISTEDBRANDS.DCR_SLNO + " INTEGER," + TABLES.EUNLISTEDBRANDS.BRAND_ID + " INTEGER, " + TABLES.EUNLISTEDBRANDS.KEY_ID + "INTEGER," +
            TABLES.EUNLISTEDBRANDS.TIME + " INTEGER," + TABLES.EUNLISTEDBRANDS.CONTENT_ID + " INTEGER," + TABLES.EUNLISTEDBRANDS.FEEDBCK_ID + " INTEGER)",
    CREATE_TABLE_E_SAMPLE: "CREATE TABLE IF NOT EXISTS " + TABLES.ESAMPLE.TABLE + "(" + TABLES.ESAMPLE.DCR_DOCTOR_SL_NO + " INTEGER ," + TABLES.ESAMPLE.DCR_SL_NO + " INTEGER," +
            TABLES.ESAMPLE.SAMPLE_ID + " INTEGER," + TABLES.ESAMPLE.POB + " INTEGER)",
    CREATE_TABLE_DETAILING_TO: "CREATE TABLE IF NOT EXISTS " + TABLES.DETAILINGTO.TABLE + "(" + TABLES.DETAILINGTO.ID + " INTEGER," + TABLES.DETAILINGTO.NAME + " TEXT," +
            TABLES.DETAILINGTO.DELETED + " INTEGER)",
    CREATE_TABLE_EBRANDMAP: "CREATE TABLE IF NOT EXISTS " + TABLES.EBRANDMAP.TABLE + "(" + TABLES.EBRANDMAP.ID + " INTEGER," + TABLES.EBRANDMAP.CONTENT_ID + " INTEGER," +
            TABLES.EBRANDMAP.BRAND_ID + " INTEGER," + TABLES.EBRANDMAP.KEY_MESSAGE_ID + " INTEGER," + TABLES.EBRANDMAP.DELETED + " INTEGER)",
    CREATE_TABLE_E_SPECIALITY: "CREATE TABLE IF NOT EXISTS " + TABLES.ESPECIALITY.TABLE + "(" + TABLES.ESPECIALITY.ID + " INTEGER," + TABLES.ESPECIALITY.NAME + " TEXT," +
            TABLES.ESPECIALITY.CONTENT_ID + " INTEGER," + TABLES.ESPECIALITY.DELETED + " INTEGER)",
    CREATE_TABLE_CONTENT: "CREATE TABLE IF NOT EXISTS " + TABLES.CONTENT.TABLE + "(" + TABLES.CONTENT.ID + " INTEGER," + TABLES.CONTENT.NAME + " TEXT," +
            TABLES.CONTENT.FROM_DATE + " DATE," + TABLES.CONTENT.TO_DATE + " DATE," + TABLES.CONTENT.ENABLED + " INTEGER," + TABLES.CONTENT.CONTENT + " TEXT," +
            TABLES.CONTENT.GROUP_ID + " INTEGER," + TABLES.CONTENT.DETALING_TO + " INTEGER," + TABLES.CONTENT.SYNCED + " INTEGER," + TABLES.CONTENT.LOCAL_FILE_PATH + " TEXT," +
            TABLES.CONTENT.FILE_TYPE_ID + " INTEGER," + TABLES.CONTENT.DELETED + " INTEGER)",
    CREATE_TABLE_SSC_LOSING_STOCK: "CREATE TABLE IF NOT EXISTS " + TABLES.SSCLOSINGSTOCK.TABLE + "(" + TABLES.SSCLOSINGSTOCK.STOCKIST_ID + " INTEGER," +
            TABLES.SSCLOSINGSTOCK.MONTH + " INTEGER," + TABLES.SSCLOSINGSTOCK.YEAR + " INTEGER," + TABLES.SSCLOSINGSTOCK.PRODUCT_ID + " INTEGER," +
            TABLES.SSCLOSINGSTOCK.CLOSING_STOCK + "  INTEGER)",
    CREATE_TABLE_SECONDAR_SALES_LAST: "CREATE TABLE IF NOT EXISTS " + TABLES.SECONDARSALESLAST.TABLE + "(" + TABLES.SECONDARSALESLAST.ID + " INTEGER, " +
            TABLES.SECONDARSALESLAST.MONTH + " INTEGER," + TABLES.SECONDARSALESLAST.YEAR + " INTEGER)",
    CREATE_TABLE_DCR_E_DETAIL_PAGE_TRACKING: "CREATE TABLE IF NOT EXISTS " + TABLES.DCREDETAILPAGETRACKING.TABLE + "(" + TABLES.DCREDETAILPAGETRACKING.ID +
            " INTEGER PRIMARY KEY AUTOINCREMENT," + TABLES.DCREDETAILPAGETRACKING.DCRDOCTOR_SLNO + " INTEGER," + TABLES.DCREDETAILPAGETRACKING.CONTENT_ID +
            " INTEGER," + TABLES.DCREDETAILPAGETRACKING.BRAND_ID + " INTEGER," + TABLES.DCREDETAILPAGETRACKING.PAGE_ID + " TEXT," +
            TABLES.DCREDETAILPAGETRACKING.PAGE_TITLE + " TEXT," + TABLES.DCREDETAILPAGETRACKING.VIEW_TIME + " INTEGER)",
    CREATE_TABLE_DCR_E_DETAIL_PAGE_LIKE: "CREATE TABLE IF NOT EXISTS " + TABLES.DCREDETAILPAGELIKE.TABLE + "(" + TABLES.DCREDETAILPAGELIKE.ID + " INTEGER PRIMARY KEY AUTOINCREMENT," +
            TABLES.DCREDETAILPAGELIKE.PAGE_TRACKING_ID + " INTEGER," + TABLES.DCREDETAILPAGELIKE.LIKES + " INTEGER )",
    CREATE_TABLE_DCR_E_DETAIL_PAGE_FAVORITES: "CREATE TABLE IF NOT EXISTS " + TABLES.DCREDETAILPAGEFAVORITES.TABLE + "(" + TABLES.DCREDETAILPAGEFAVORITES.ID +
            " INTEGER PRIMARY KEY AUTOINCREMENT," + TABLES.DCREDETAILPAGEFAVORITES.HREF + " TEXT," + TABLES.DCREDETAILPAGEFAVORITES.TITLE + " TEXT," +
            TABLES.DCREDETAILPAGEFAVORITES.CONTENT_ID + " INTEGER," + TABLES.DCREDETAILPAGEFAVORITES.BRAND_ID + "INTEGER )",
    CREATE_TABLE_DCR_E_DETAIL_PAGE_GROUPING: "CREATE TABLE IF NOT EXISTS " + TABLES.DCREDETAILPAGEGROUPING.TABLE + "(" + TABLES.DCREDETAILPAGEGROUPING.ID +
            " INTEGER PRIMARY KEY AUTOINCREMENT," + TABLES.DCREDETAILPAGEGROUPING.GROUP_ID + " INTEGER," + TABLES.DCREDETAILPAGEGROUPING.GROUP_NAME + " TEXT," +
            TABLES.DCREDETAILPAGEGROUPING.FAV_ID + " INTEGER," + TABLES.DCREDETAILPAGEGROUPING.PAGE_ORDER + " INTEGER )",
    CREATE_TABLE_GUIDELINE: "CREATE TABLE IF NOT EXISTS " + TABLES.GUIDELINE.TABLE + "(" + TABLES.GUIDELINE.ID + " INTEGER PRIMARY KEY AUTOINCREMENT," +
            TABLES.GUIDELINE.GUIDELINE_ID + " TEXT," + TABLES.GUIDELINE.GUIDELINE_MSG + " TEXT," + TABLES.GUIDELINE.NEED_ACCEPTANCE + " TEXT)",
    CREATE_TABLE_GUIDELINE_ACCEPETED: "CREATE TABLE IF NOT EXISTS " + TABLES.GUIDELINEACCEPETED.TABLE + "(" + TABLES.GUIDELINEACCEPETED.GUIDELINE_ID + " TEXT," +
            TABLES.GUIDELINEACCEPETED.ACCEPTED + " TEXT," + TABLES.GUIDELINEACCEPETED.GUIDELINE_SHOWN + " INTEGER)",
    CREATE_TABLE_REQUEST_TYPE: "CREATE TABLE IF NOT EXISTS " + TABLES.REQUESTTYPE.TABLE + "(" + TABLES.REQUESTTYPE.REQUEST_ID + " TEXT," +
            TABLES.REQUESTTYPE.REQUEST_NAME + " TEXT)",
    CREATE_TABLE_NOTIFICATION_DETAILS: "CREATE TABLE IF NOT EXISTS " + TABLES.NOTIFICATIONDETAILS.TABLE + "(" + TABLES.NOTIFICATIONDETAILS.ID + " INTEGER PRIMARY KEY AUTOINCREMENT," +
            TABLES.NOTIFICATIONDETAILS.PROCESS_ID + " INTEGER," + TABLES.NOTIFICATIONDETAILS.PROCESS_NAME + " TEXT)",
    CREATE_TABLE_NOTIFICATION: "CREATE TABLE IF NOT EXISTS " + TABLES.NOTIFICATION.TABLE + "(" + TABLES.NOTIFICATION.ID + " INTEGER PRIMARY KEY AUTOINCREMENT," +
            TABLES.NOTIFICATION.NOTIFICATION_COUNT + " INTEGER," + TABLES.NOTIFICATION.REMAINDER_COUNT + " INTEGER)",
    CREATE_TABLE_DCR_BRAND_ORDER: "CREATE TABLE IF NOT EXISTS " + TABLES.DCRBRANDORDER.TABLE + "(" + TABLES.DCRBRANDORDER.DCR_SLNO + " INTEGER," +
            TABLES.DCRBRANDORDER.DCR_DOCTOR_SLNO + " INTEGER," + TABLES.DCRBRANDORDER.SKU_ID + " INTEGER," + TABLES.DCRBRANDORDER.CATEGORY_ID + " INTEGER," +
            TABLES.DCRBRANDORDER.BRAND_ID + " INTEGER," + TABLES.DCRBRANDORDER.POB_QTY + " INTEGER," + TABLES.DCRBRANDORDER.PRICE + " INTEGER," +
            TABLES.DCRBRANDORDER.POB_VAL + " INTEGER," + TABLES.DCRBRANDORDER.STOCKIST_ID + " INTEGER)",
    CREATE_TABLE_VERSION: "CREATE TABLE IF NOT EXISTS " + TABLES.VERSION.TABLE + "(" + TABLES.VERSION.ID + " INTEGER PRIMARY KEY AUTOINCREMENT," +
            TABLES.VERSION.URL + " TEXT," + TABLES.VERSION.OLD_VERSION + " TEXT," + TABLES.VERSION.CURRENT_VERSION + " INTEGER)",
    CREATE_TABLE_EFFORT_KPI: "CREATE TABLE IF NOT EXISTS " + TABLES.EFFORT_KPI.TABLE + "(" +
            TABLES.EFFORT_KPI.FIELD_DAYS + " DECIMAL(5,2) ," +
            TABLES.EFFORT_KPI.LISTED_DOCTORS + " INTEGER," +
            TABLES.EFFORT_KPI.LISTED_DOCTORS_MET + " INTEGER" +
            TABLES.EFFORT_KPI.LISTED_CALLS + " INTEGER," +
            TABLES.EFFORT_KPI.UNLISTED_DOCTORS_MET + " INTEGER," +
            TABLES.EFFORT_KPI.TARGET_VISIT + " INTEGER," +
            TABLES.EFFORT_KPI.ACTUAL_VISIT + "INTEGER," +
            TABLES.EFFORT_KPI.A_DOCTORS + " INTEGER," +
            TABLES.EFFORT_KPI.B_DOCTORS + " INTEGER," +
            TABLES.EFFORT_KPI.C_DOCTORS + " INTEGER," +
            TABLES.EFFORT_KPI.D_DOCTORS + " INTEGER," +
            TABLES.EFFORT_KPI.A_DOCTORS_MET + " INTEGER," +
            TABLES.EFFORT_KPI.B_DOCTORS_MET + " INTEGER," +
            TABLES.EFFORT_KPI.C_DOCTORS_MET + " INTEGER," +
            TABLES.EFFORT_KPI.D_DOCTORS_MET + " INTEGER," +
            TABLES.EFFORT_KPI.A_TARGET_VISIT + " INTEGER," +
            TABLES.EFFORT_KPI.B_TARGET_VISIT + " INTEGER," +
            TABLES.EFFORT_KPI.C_TARGET_VISIT + " INTEGER," +
            TABLES.EFFORT_KPI.A_CALLS_AS_PER_TARGET + " INTEGER," +
            TABLES.EFFORT_KPI.B_CALLS_AS_PER_TARGET + " INTEGER," +
            TABLES.EFFORT_KPI.C_CALLS_AS_PER_TARGET + " INTEGER," +
            TABLES.EFFORT_KPI.LEAVE_DAYS + " INTEGER," +
            TABLES.EFFORT_KPI.JOIN_TEGER_WORK_CALLS + " INTEGER," +
            TABLES.EFFORT_KPI.JOIN_TEGER_WORK_DAYS + " DECIMAL(5,2)," +
            TABLES.EFFORT_KPI.NO_OF_CHEMISTS + " INTEGER," +
            TABLES.EFFORT_KPI.CHEMIST_MET + " INTEGER," +
            TABLES.EFFORT_KPI.CHEMIST_CALLS + " INTEGER," +
            TABLES.EFFORT_KPI.POB + " DECIMAL(5,2)," +
            TABLES.EFFORT_KPI.TOTAL_STOCKISTS + " INTEGER," +
            TABLES.EFFORT_KPI.STOCKIST_MET + " INTEGER," +
            TABLES.EFFORT_KPI.STOCKIST_CALLS + " INTEGER," +
            TABLES.EFFORT_KPI.DOB + " INTEGER," +
            TABLES.EFFORT_KPI.LAST_ACTIVITY_DATE_PROCESSED + " TEXT," +
            TABLES.EFFORT_KPI.EXECUTED_DAYE + " TEXT," +
            TABLES.EFFORT_KPI.MONTH + " INTEGER," +
            TABLES.EFFORT_KPI.YEAR + " INTEGER," +
            TABLES.EFFORT_KPI.DOCTOR_CALL_AVERAGE + " DECIMAL(5,2)," +
            TABLES.EFFORT_KPI.FREQ_ACH + " DECIMAL(5,2)," +
            TABLES.EFFORT_KPI.A_DOCTOR_COVERAGE + " DECIMAL(5,2)," +
            TABLES.EFFORT_KPI.B_DOCTOR_COVERAGE + " DECIMAL(5,2)," +
            TABLES.EFFORT_KPI.C_DOCTOR_COVERAGE + " DECIMAL(5,2)," +
            TABLES.EFFORT_KPI.D_DOCTOR_COVERAGE + " DECIMAL(5,2)," +
            TABLES.EFFORT_KPI.DOCTOR_COVERAGE + " DECIMAL(5,2)," +
            TABLES.EFFORT_KPI.UNLISTED_DOCTORS_CALL_PERCENTAGE + " DECIMAL(5,2)," +
            TABLES.EFFORT_KPI.CHEMIST_COVERGAE + " DECIMAL(5,2)," +
            TABLES.EFFORT_KPI.CHEMIST_CALL_AVG + " DECIMAL(5,2))",
    CREATE_TABLE_SALES: "CREATE TABLE IF NOT EXISTS " + TABLES.SALES.TABLE + "(" +
            TABLES.SALES.YEAR + " INTEGER," +
            TABLES.SALES.MONTH + " INTEGER," +
            TABLES.SALES.TARGET_PRIMARY_SALES_MTD + " DECIMAL(5,2)," +
            TABLES.SALES.TARGET_PRIMARY_SALES_MTD_LY + " DECIMAL(5,2)," +
            TABLES.SALES.TARGET_PRIMARY_SALES_YTD + " DECIMAL(5,2)," +
            TABLES.SALES.TARGET_PRIMARY_SALES_YTD_LY + " DECIMAL(5,2)," +
            TABLES.SALES.PRIMARY_SALES_MTD + " DECIMAL(5,2)," +
            TABLES.SALES.PRIMARY_SALES_MTD_LY + " DECIMAL(5,2)," +
            TABLES.SALES.PRIMARY_SALES_YTD + " DECIMAL(5,2)," +
            TABLES.SALES.PRIMARY_SALES_YTD_LY + " DECIMAL(5,2)," +
            TABLES.SALES.SECONDARY_SALES_MTD + " DECIMAL(5,2)," +
            TABLES.SALES.SECONDARY_SALES_MTD_LY + " DECIMAL(5,2)," +
            TABLES.SALES.SECONDARY_SALES_YTD + " DECIMAL(5,2)," +
            TABLES.SALES.SECONDARY_SALES_YTD_LY + " DECIMAL(5,2)," +
            TABLES.SALES.LAST_UPDATED_DATE + " TEXT)",
    CREATE_TABLE_COMMUNICATION_PAD: "CREATE TABLE IF NOT EXISTS " + TABLES.COMMUNICATION_PAD.TABLE + "(" +
            TABLES.COMMUNICATION_PAD.TABLE + " INTEGER," +
            TABLES.COMMUNICATION_PAD.COMMUNICATION_ID + " TEXT," +
            TABLES.COMMUNICATION_PAD.MESSAGE_SENT_BY + " TEXT," +
            TABLES.COMMUNICATION_PAD.VALID_FROM + " TEXT," +
            TABLES.COMMUNICATION_PAD.VALID_TO + " TEXT," +
            TABLES.COMMUNICATION_PAD.MESSAGE + " TEXT," +
            TABLES.COMMUNICATION_PAD.CREATED_DATE + " TEXT," +
            TABLES.COMMUNICATION_PAD.READ_STATUS + " INTEGER)",
    CREATE_TABLE_LATEST_CUSTOMER_ADDED: "CREATE TABLE IF NOT EXISTS " + TABLES.LATEST_CUSTOMER_ADDED.TABLE + "(" +
            TABLES.LATEST_CUSTOMER_ADDED.CUSTOMER_SL_NO + " TEXT," +
            TABLES.LATEST_CUSTOMER_ADDED.CUSTOMER_NAME + " TEXT," +
            TABLES.LATEST_CUSTOMER_ADDED.CUSTOMER_TYPE + " CHAR," +
            TABLES.LATEST_CUSTOMER_ADDED.CUSTOMER_DCR_SL_NO + " TEXT )",
    CREATE_TABLE_SAMPLE_REQUEST: "CREATE TABLE IF NOT EXISTS " + TABLES.SAMPLE_REQUEST.TABLE + "(" +
            TABLES.SAMPLE_REQUEST.DCR_SL_NO + " INTEGER," +
            TABLES.SAMPLE_REQUEST.CUSTOMER_ID + " INTEGER," +
            TABLES.SAMPLE_REQUEST.SAMPLE_ID + " INTEGER," +
            TABLES.SAMPLE_REQUEST.SAMPLE_TYPE_ID + " INTEGER," +
            TABLES.SAMPLE_REQUEST.REMARKS + " TEXT," +
            TABLES.SAMPLE_REQUEST.SIGNATURE + " TEXT," +
            TABLES.SAMPLE_REQUEST.DATE + " date," +
            TABLES.SAMPLE_REQUEST.QUANTITY + " INTEGER )",
    CREATE_TABLE_PRODUCT_TYPE: "CREATE TABLE IF NOT EXISTS " + TABLES.PRODUCT_TYPE.TABLE + "(" +
            TABLES.PRODUCT_TYPE.PRODUCT_TYPE_ID + " INTEGER," +
            TABLES.PRODUCT_TYPE.NAME + " TEXT )",
    CREATE_TABLE_ENTERED_DATES: "CREATE TABLE IF NOT EXISTS " + TABLES.ENTERED_DATES.TABLE + "(" +
            TABLES.ENTERED_DATES.ACTIVITY_DATE + " INTEGER," +
            TABLES.ENTERED_DATES.ACTIVITY_PEROID + " TEXT )",
    CREATE_TABLE_WORKED_WITH: "CREATE TABLE IF NOT EXISTS " + TABLES.WORKED_WITH.TABLE + "(" +
            TABLES.WORKED_WITH.WORKEDWITH_ID + " INTEGER," +
            TABLES.WORKED_WITH.ORDER_NO + " INTEGER," +
            TABLES.WORKED_WITH.WORKEDWITH_SEQUENCE + " INTEGER," +
            TABLES.WORKED_WITH.WORKEDWITH_NAME + " TEXT )",
      CREATE_TABLE_CALLPLANCHEMIST: "CREATE TABLE IF NOT EXISTS " + TABLES.CALLPLANCHEMIST.TABLE + "(" +
            TABLES.CALLPLANCHEMIST.CHEMIST_SLNO + " INTEGER," +
            TABLES.CALLPLANCHEMIST.DATE + " TEXT )",
      CREATE_TABLE_CALLPLANSTOCKIST: "CREATE TABLE IF NOT EXISTS " + TABLES.CALLPLANSTOCKIST.TABLE + "(" +
            TABLES.CALLPLANSTOCKIST.STOCKIST_SLNO + " INTEGER," +
            TABLES.CALLPLANSTOCKIST.DATE + " TEXT )"
};
