#!/usr/bin/env python
# coding: utf-8

# In[1]:


#Import Dependencies
import pandas as pd
import numpy as np
import csv


# In[2]:


ontario_pop_df = pd.DataFrame()
Ontario_Immigrants_International_df = pd.DataFrame()
Ontario_Emigrants_International_df = pd.DataFrame()
Ontario_In_migrant_Interprovincial_df = pd.DataFrame()
Ontario_Out_migrant_Interprovincial_df = pd.DataFrame()
Crime_severity_index_toronto_df = pd.DataFrame()
ontario_median_age_df = pd.DataFrame()
ontario_average_age_df = pd.DataFrame()
Unemployment_rate_toronto_df = pd.DataFrame()
Participation_rate_toronto_df = pd.DataFrame()
Employment_rate_toronto_df = pd.DataFrame()
Toronto_population_df = pd.DataFrame()
UT_enrolment_df = pd.DataFrame(columns=['Date','UT_Graduate_Enrolment', 'UT_Undergraduate_Enrolment', 'UT_Total_Enrolment'])


# In[4]:


#Ontario population csv import
src_link = "data_source/ontario_population.csv"
def create_ontario_pop(link):
    global ontario_pop_df
    ontario_pop_df = pd.read_csv(link)
    ontario_pop_df = ontario_pop_df[["REF_DATE","VALUE"]]
    #convert datetime and rename column
    import datetime as dt
    ontario_pop_df["REF_DATE"] = pd.to_datetime(ontario_pop_df["REF_DATE"], infer_datetime_format=True)
    ontario_pop_df = ontario_pop_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'Ontario_Population'})
    ontario_pop_df = ontario_pop_df.set_index('Date')
    ontario_pop_df.index = ontario_pop_df.index.strftime('%Y-%m')
    return ontario_pop_df
    
create_ontario_pop(src_link)


# In[10]:


#Create ontario immmigration (international) dataframe
src_link = "data_source/ontario_immigration_international.csv"
def create_ontario_immigrants_international(link):
    global Ontario_Immigrants_International_df
    Ontario_Immigrants_International_df = pd.read_csv(link)
    Ontario_Immigrants_International_df = Ontario_Immigrants_International_df[Ontario_Immigrants_International_df["Components of population growth"] == "Immigrants"]
    Ontario_Immigrants_International_df = Ontario_Immigrants_International_df[["REF_DATE","VALUE"]]
    Ontario_Immigrants_International_df["REF_DATE"] = pd.to_datetime(Ontario_Immigrants_International_df["REF_DATE"], infer_datetime_format=True)
    Ontario_Immigrants_International_df = Ontario_Immigrants_International_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'Ontario_Immigrants_International'})
    Ontario_Immigrants_International_df = Ontario_Immigrants_International_df.set_index('Date')
    Ontario_Immigrants_International_df.index = Ontario_Immigrants_International_df.index.strftime('%Y-%m')
    return Ontario_Immigrants_International_df

def create_ontario_emigrants_international(link):
    global Ontario_Emigrants_International_df
    Ontario_Emigrants_International_df = pd.read_csv(link)
    Ontario_Emigrants_International_df = Ontario_Emigrants_International_df[Ontario_Emigrants_International_df["Components of population growth"] == "Emigrants"]
    Ontario_Emigrants_International_df = Ontario_Emigrants_International_df[["REF_DATE","VALUE"]]
    Ontario_Emigrants_International_df.head()
    Ontario_Emigrants_International_df["REF_DATE"] = pd.to_datetime(Ontario_Emigrants_International_df["REF_DATE"], infer_datetime_format=True)
    Ontario_Emigrants_International_df = Ontario_Emigrants_International_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'Ontario_Emigrants_International'})
    Ontario_Emigrants_International_df = Ontario_Emigrants_International_df.set_index('Date')
    Ontario_Emigrants_International_df.index = Ontario_Emigrants_International_df.index.strftime('%Y-%m')
    return Ontario_Emigrants_International_df


create_ontario_immigrants_international(src_link)
create_ontario_emigrants_international(src_link)


# In[6]:


#Create ontario in-migrants dataframe
src_link = "data_source/ontario_immigration_interprovincial.csv"
def create_ontario_in_migrant_interprovincial(link):
    global Ontario_In_migrant_Interprovincial_df
    Ontario_In_migrant_Interprovincial_df = pd.read_csv(link)
    Ontario_In_migrant_Interprovincial_df = Ontario_In_migrant_Interprovincial_df[Ontario_In_migrant_Interprovincial_df["Interprovincial migration"] == "In-migrants"]
    Ontario_In_migrant_Interprovincial_df = Ontario_In_migrant_Interprovincial_df[["REF_DATE","VALUE"]]
    Ontario_In_migrant_Interprovincial_df.head()
    Ontario_In_migrant_Interprovincial_df["REF_DATE"] = pd.to_datetime(Ontario_In_migrant_Interprovincial_df["REF_DATE"], infer_datetime_format=True)
    Ontario_In_migrant_Interprovincial_df = Ontario_In_migrant_Interprovincial_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'Ontario_In_migrant_Interprovincial'})
    Ontario_In_migrant_Interprovincial_df =Ontario_In_migrant_Interprovincial_df.set_index('Date')
    Ontario_In_migrant_Interprovincial_df.index = Ontario_In_migrant_Interprovincial_df.index.strftime('%Y-%m')
    return Ontario_In_migrant_Interprovincial_df

def create_ontario_out_migrant_interprovincial(link):
    global Ontario_Out_migrant_Interprovincial_df
    Ontario_Out_migrant_Interprovincial_df = pd.read_csv(link)
    Ontario_Out_migrant_Interprovincial_df = Ontario_Out_migrant_Interprovincial_df[Ontario_Out_migrant_Interprovincial_df["Interprovincial migration"] == "Out-migrants"]
    Ontario_Out_migrant_Interprovincial_df = Ontario_Out_migrant_Interprovincial_df[["REF_DATE","VALUE"]]
    Ontario_Out_migrant_Interprovincial_df["REF_DATE"] = pd.to_datetime(Ontario_Out_migrant_Interprovincial_df["REF_DATE"], infer_datetime_format=True)
    Ontario_Out_migrant_Interprovincial_df = Ontario_Out_migrant_Interprovincial_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'Ontario_Out_migrant_Interprovincial'})
    Ontario_Out_migrant_Interprovincial_df =Ontario_Out_migrant_Interprovincial_df.set_index('Date')
    Ontario_Out_migrant_Interprovincial_df.index = Ontario_Out_migrant_Interprovincial_df.index.strftime('%Y-%m')
    return Ontario_Out_migrant_Interprovincial_df


create_ontario_in_migrant_interprovincial(src_link)
create_ontario_out_migrant_interprovincial(src_link)


# In[7]:


#Create toronto crime index dataframe
src_link = "data_source/Crime_severity_index_toronto.csv"

#convert date in year into date in month (YYYY-MM)
def year_to_month(x):
    return x + "-01"

def create_crime_index(link):
    global Crime_severity_index_toronto_df
    Crime_severity_index_toronto_df = pd.read_csv(link)
    Crime_severity_index_toronto_df = Crime_severity_index_toronto_df[["REF_DATE","VALUE"]]
    Crime_severity_index_toronto_df["REF_DATE"] = Crime_severity_index_toronto_df["REF_DATE"].apply(str)
    Crime_severity_index_toronto_df["REF_DATE"] = Crime_severity_index_toronto_df["REF_DATE"].apply(lambda x: year_to_month(x))
    Crime_severity_index_toronto_df = Crime_severity_index_toronto_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'Crime_severity_index_toronto'})
    Crime_severity_index_toronto_df = Crime_severity_index_toronto_df.set_index('Date')
    return Crime_severity_index_toronto_df

create_crime_index(src_link) 


# In[11]:


#Create ontario median age dataframe
src_link = "data_source/ontario_age.csv"

def create_ontario_median_age(link):
    global ontario_median_age_df
    ontario_median_age_df = pd.read_csv(link)
    ontario_median_age_df = ontario_median_age_df[ontario_median_age_df["Age group"] == "Median age"]
    ontario_median_age_df = ontario_median_age_df[["REF_DATE","VALUE"]]
    ontario_median_age_df["REF_DATE"] = ontario_median_age_df["REF_DATE"].apply(str)
    ontario_median_age_df["REF_DATE"] = ontario_median_age_df["REF_DATE"].apply(lambda x: year_to_month(x))
    ontario_median_age_df = ontario_median_age_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'ontario_median_age'})
    ontario_median_age_df = ontario_median_age_df.set_index('Date')
    return ontario_median_age_df

def create_ontario_average_age(link):
    global ontario_average_age_df
    ontario_average_age_df = ontario_average_age_df[ontario_average_age_df["Age group"] == "Average age"]
    ontario_average_age_df = ontario_average_age_df[["REF_DATE","VALUE"]]
    ontario_average_age_df["REF_DATE"] = ontario_average_age_df["REF_DATE"].apply(str)
    ontario_average_age_df["REF_DATE"] = ontario_average_age_df["REF_DATE"].apply(lambda x: year_to_month(x))
    ontario_average_age_df = ontario_average_age_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'ontario_average_age'})
    ontario_average_age_df = ontario_average_age_df.set_index('Date')
    return ontario_average_age_df

create_ontario_median_age(src_link)
create_ontario_average_age(src_link)


# In[12]:


#Create toronto unemployment rate dataframe
src_link = "data_source/labour_force.csv"
def create_toronto_population(link):
    global Toronto_population_df
    Toronto_population_df = pd.read_csv(link)
    Toronto_population_df = Toronto_population_df[Toronto_population_df["Labour force characteristics"] == "Population"]
    Toronto_population_df = Toronto_population_df[["REF_DATE","VALUE"]]
    Toronto_population_df["REF_DATE"] = pd.to_datetime(Toronto_population_df["REF_DATE"], infer_datetime_format=True)
    Toronto_population_df = Toronto_population_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'Toronto_population'})
    Toronto_population_df = Toronto_population_df.set_index('Date')
    Toronto_population_df.index = Toronto_population_df.index.strftime('%Y-%m')
    return Toronto_population_df
    
def create_unemployment_rate(link):
    global Unemployment_rate_toronto_df
    Unemployment_rate_toronto_df = pd.read_csv(link)
    Unemployment_rate_toronto_df = Unemployment_rate_toronto_df[Unemployment_rate_toronto_df["Labour force characteristics"] == "Unemployment rate"]
    Unemployment_rate_toronto_df = Unemployment_rate_toronto_df[["REF_DATE","VALUE"]]
    Unemployment_rate_toronto_df["REF_DATE"] = pd.to_datetime(Unemployment_rate_toronto_df["REF_DATE"], infer_datetime_format=True)
    Unemployment_rate_toronto_df = Unemployment_rate_toronto_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'Unemployment_rate_toronto'})
    Unemployment_rate_toronto_df = Unemployment_rate_toronto_df.set_index('Date')
    Unemployment_rate_toronto_df.index = Unemployment_rate_toronto_df.index.strftime('%Y-%m')
    return Unemployment_rate_toronto_df

def create_participation_rate(link):
    global Participation_rate_toronto_df
    Participation_rate_toronto_df = pd.read_csv(link)
    Participation_rate_toronto_df = Participation_rate_toronto_df[Participation_rate_toronto_df["Labour force characteristics"] == "Participation rate"]
    Participation_rate_toronto_df = Participation_rate_toronto_df[["REF_DATE","VALUE"]]
    Participation_rate_toronto_df["REF_DATE"] = pd.to_datetime(Participation_rate_toronto_df["REF_DATE"], infer_datetime_format=True)
    Participation_rate_toronto_df = Participation_rate_toronto_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'Participation_rate_toronto'})
    Participation_rate_toronto_df = Participation_rate_toronto_df.set_index('Date')
    Participation_rate_toronto_df.index = Participation_rate_toronto_df.index.strftime('%Y-%m')
    return Participation_rate_toronto_df

def create_employment_rate(link):
    global Employment_rate_toronto_df
    Employment_rate_toronto_df = pd.read_csv(link)
    Employment_rate_toronto_df = Employment_rate_toronto_df[Employment_rate_toronto_df["Labour force characteristics"] == "Employment rate"]
    Employment_rate_toronto_df = Employment_rate_toronto_df[["REF_DATE","VALUE"]]
    Employment_rate_toronto_df["REF_DATE"] = pd.to_datetime(Employment_rate_toronto_df["REF_DATE"], infer_datetime_format=True)
    Employment_rate_toronto_df = Employment_rate_toronto_df.rename(columns={'REF_DATE': 'Date', 'VALUE': 'Employment_rate_toronto'})
    Employment_rate_toronto_df = Employment_rate_toronto_df.set_index('Date')
    Employment_rate_toronto_df.index = Employment_rate_toronto_df.index.strftime('%Y-%m')
    return Employment_rate_toronto_df
    
    
create_toronto_population(src_link)
create_unemployment_rate(src_link)
create_participation_rate(src_link)
create_employment_rate(src_link)


# In[13]:


def UT_enrolment_input(UT_Graduate_Enrolment, UT_Undergraduate_Enrolment, Year):
    UT_Total_Enrolment = UT_Graduate_Enrolment + UT_Undergraduate_Enrolment
    Year = str(Year) + "-01"
    global UT_enrolment_df
    UT_enrolment_df = UT_enrolment_df.append({"Date": Year, 'UT_Graduate_Enrolment':UT_Graduate_Enrolment, 'UT_Undergraduate_Enrolment': UT_Undergraduate_Enrolment, 'UT_Total_Enrolment': UT_Total_Enrolment}, ignore_index=True)
    return UT_enrolment_df
UT_enrolment_df.head()


# In[14]:


#UT_Graduate_Enrolment = 1
#UT_Undergraduate_Enrolment = 2
#Year = 2012
#UT_enrolment_input(UT_Graduate_Enrolment, UT_Undergraduate_Enrolment, Year)
UT_enrolment_input(8549,36712,2001)
UT_enrolment_input(9107,38339,2002)
UT_enrolment_input(9824,41184,2003)
UT_enrolment_input(10230,45533,2004)
UT_enrolment_input(10485,47402,2005)
UT_enrolment_input(10534,49669,2006)
UT_enrolment_input(10990,50220,2007)
UT_enrolment_input(12142,50159,2008)
UT_enrolment_input(12598,50336,2009)
UT_enrolment_input(13116,52286,2010)
UT_enrolment_input(13385,53226,2011)
UT_enrolment_input(13754,54334,2012)
UT_enrolment_input(14154,56157,2013)
UT_enrolment_input(14843,57527,2014)
UT_enrolment_input(15650,58866,2015)
UT_enrolment_input(16227,60903,2016)
UT_enrolment_input(17029,61262,2017)
UT_enrolment_input(17525,61737,2018)
UT_enrolment_input(18319,62333,2019)
UT_enrolment_input(19184,63127,2020)
UT_enrolment_df = UT_enrolment_df.set_index("Date")

